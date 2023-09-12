<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import IdGeneratorUtil from '@/shared/utils/idGenerator.util';

const props = defineProps<{
  text?: string;
  block?: boolean;
}>();

const id = ref(IdGeneratorUtil.getId());
const show = ref(false);
const top = ref(0);
const left = ref(0);
const activatorRef = ref<HTMLElement>();
const contentRef = ref<HTMLElement>();
const positionY = ref('top');
const positionX = ref('center');
const stylePosition = computed(() => `--ui-tooltip-top: ${top.value}px; --ui-tooltip-left: ${left.value}px;`);
let timeoutRef: NodeJS.Timeout;
const timeToShow = 4000;

function open() {
  show.value = true;
  window.addEventListener('wheel', close);
  window.addEventListener('touchmove', close);
}

function close() {
  show.value = false;
}

function calculatePosition() {
  const contentElement = (contentRef.value as InstanceType<typeof HTMLDivElement>);
  const activatorElement = (activatorRef.value as InstanceType<typeof HTMLDivElement>);
  const contentClient = contentElement.getClientRects()[0];
  const activatorClient = activatorElement.getClientRects()[0];
  const htmlParent = activatorElement.closest('html');
  let newLeft = 0;
  let newTop = 0;
  if (htmlParent !== null) {
    const activatorLeft = activatorClient.left;
    const activatorTop = activatorClient.top;
    const activatorWidth = activatorClient.width;
    const contentHeight = contentClient.height;
    const contentWidth = contentClient.width;
    const parentWidth = htmlParent.getClientRects()[0].width;
    positionY.value = 'top';
    positionX.value = 'center';
    newLeft = activatorLeft + (activatorWidth / 2) - (contentWidth / 2);
    newTop = activatorTop - contentHeight - 12;
    const isOverflowRight = newLeft + contentWidth > parentWidth;
    const isOverflowLeft = newLeft < 0;

    if (newTop < 0) {
      const activatorBottom = activatorClient.bottom;
      newTop = activatorBottom + 12;
      positionY.value = 'bottom';
    }
    if (isOverflowRight) {
      const activatorRight = activatorClient.right;
      newLeft = activatorRight - contentWidth;
      positionX.value = 'right';
    } else if (isOverflowLeft) {
      newLeft = activatorLeft;
      positionX.value = 'left';
    }
    top.value = newTop;
    left.value = newLeft;
  }
}

watch(show, (newVal) => {
  if (newVal) {
    timeoutRef = setTimeout(() => {
      close();
    }, timeToShow);
  } else {
    clearTimeout(timeoutRef);
    window.removeEventListener('wheel', close);
    window.removeEventListener('touchmove', close);
  }
});

watch(contentRef, (newVal) => {
  if (newVal !== null) {
    calculatePosition();
  }
});
</script>

<template>
  <div :class="['ui-tooltip', { 'ui-tooltip--block': props.block }]">
    <div
      ref="activatorRef"
      class="ui-tooltip__activator"
      :aria-describedby="id"
      @mouseenter="open"
      @mouseleave="close"
      @focusin="open"
      @focusout="close"
    >
      <slot />
    </div>
    <teleport to="#ui-tooltip-zone">
      <transition name="fade-tooltip">
        <div
          v-if="show"
          :id="id"
          ref="contentRef"
          :class="['ui-tooltip__content', `ui-tooltip__content--${positionY}-${positionX}`]"
          role="tooltip"
          :style="stylePosition"
        >
          <slot name="content">
            <div
              v-if="props.text"
              class="ui-tooltip__text"
            >
              {{ props.text }}
            </div>
          </slot>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<style lang="scss">
.ui-tooltip {
  display: inline-block;

  &--block {
    display: block;
  }

  &__activator {
    position: relative;
    display: flex;
  }

  &__text {
    white-space: nowrap;
    font-size: .825rem;
  }

  &__content {
    --ui-tooltip-border: var(--ui-color-grey--90);
    --ui-tooltip-background: var(--ui-color-grey--80);
    --ui-tooltip-color: var(--ui-color-grey--80);
    --ui-tooltip-margin: #{variables.$gutter*3};
    --ui-tooltip-border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--ui-tooltip-background);
    padding: variables.$gutter*2 variables.$gutter*3;
    border-radius: var(--ui-tooltip-border-radius);
    border: 1px solid var(--ui-tooltip-border);
    box-sizing: border-box;
    color: var(--ui-tooltip-color);
    transform: translateX(var(--ui-tooltip-left, 0)) translateY(var(--ui-tooltip-top, 0));

    &::before {
      content: '';
      display: block;
      height: 16px;
      width: 16px;
      background-image: linear-gradient(-45deg, transparent 50%, var(--ui-tooltip-background) 50%);
      position: absolute;
      border-top: 1px solid var(--ui-tooltip-border);
      border-left: 1px solid var(--ui-tooltip-border);
      box-sizing: border-box;
    }

    &--top-center {
      &::before {
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 50%) rotate(-135deg);
      }
    }

    &--top-left {
      &::before {
        bottom: 0;
        left: 0;
        transform: translate(50%, 50%) rotate(-135deg);
      }
    }

    &--top-right {
      &::before {
        bottom: 0;
        right: 0;
        transform: translate(-50%, 50%) rotate(-135deg);
      }
    }

    &--bottom-center {
      &::before {
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }

    &--bottom-left {
      &::before {
        top: 0;
        left: 0;
        transform: translate(50%, -50%) rotate(45deg);
      }
    }

    &--bottom-right {
      &::before {
        top: 0;
        right: 0;
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
  }
}
</style>