<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue';
import IdGeneratorUtil from '@/shared/utils/idGenerator.util';
import { useEscapeStack } from '@/shared/use/escapeStack.use';

const props = defineProps<{
  fixed?: boolean;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
}>();

const { registerEscapeListener, unregisterEscapeListener } = useEscapeStack();
const id = IdGeneratorUtil.getId();
const activatorRef = ref<HTMLElement>();
const contentRef = ref<HTMLDivElement>();
const isActive = ref(false);
const topC = ref(0);
const leftC = ref(0);
const stylePosition = computed(() => `--ui-menu-top: ${topC.value}px; --ui-menu-left: ${leftC.value}px;`);

const fixedPosition = computed(() => {
  const position = {
    top: '',
    bottom: '',
    left: '',
    right: '',
  };
  if (props.fixed) {
    if (props.top !== undefined && props.top !== '') {
      position.top = props.top + 'rem';
    } else if (props.bottom !== undefined && props.bottom !== '') {
      position.bottom = props.bottom + 'rem';
    }
    if (props.left !== undefined && props.left !== '') {
      position.left = props.left + 'rem';
    } else if (props.right !== undefined && props.right !== '') {
      position.right = props.right + 'rem';
    }
  }

  return position;
});

function clickOutside(event: Event): void {
  const target = event.target as Node;
  const menuArea = document.querySelector('.ui-menu-zone') as Node;
  const closeMenu = !!menuArea && !!target && !menuArea.contains(target);
  if (closeMenu) {
    close();
  }
}

function toogleActive(): void {
  isActive.value = !isActive.value;
}

function close() {
  if (isActive.value) {
    isActive.value = false;
  }
}

function open() {
  if (!isActive.value) {
    isActive.value = true;
  }
}

async function calculatePosition() {
  await nextTick();
  if (contentRef.value) {
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
      const activatorHeight = activatorClient.height;
      const contentHeight = contentClient.height;
      const contentWidth = contentClient.width;
      const parentWidth = htmlParent.getClientRects()[0].width;
      const parentHeight = htmlParent.getClientRects()[0].height;
      const marginToLeft = 12;
      const marginToButton = 4;
      newLeft = activatorLeft;
      newTop = activatorTop + activatorHeight + marginToButton;

      const isOverflowRight = newLeft + marginToLeft + contentWidth > parentWidth;
      if (isOverflowRight) {
        newLeft = parentWidth - contentWidth - marginToLeft;
      }
      const isOverflowBottom = newTop + marginToButton + contentHeight > parentHeight;
      if (isOverflowBottom) {
        if (newTop > contentHeight) {
          newTop = activatorTop - contentHeight - marginToButton;
        } else {
          newTop = parentHeight - contentHeight - marginToLeft;
        }
      }
      topC.value = newTop < marginToButton ? marginToButton : newTop;
      leftC.value = newLeft;
    }
  }
}

function escapeListener(event: KeyboardEvent) {
  event.stopPropagation();
  close();
}

watch(isActive, (newVal) => {
  if (newVal) {
    document.body.addEventListener('mousedown', clickOutside, { passive: true });
    document.body.addEventListener('touchstart', clickOutside, { passive: true });
    window.addEventListener('resize', calculatePosition);
    registerEscapeListener(escapeListener);
  } else {
    document.body.removeEventListener('mousedown', clickOutside);
    document.body.removeEventListener('touchstart', clickOutside);
    window.removeEventListener('resize', calculatePosition);
    unregisterEscapeListener(escapeListener);
  }
});

watch(contentRef, (newVal) => {
  if (newVal !== null) {
    calculatePosition();
  }
});

defineExpose({
  isActive,
  close,
  open,
  toogleActive,
  calculatePosition,
});
</script>

<template>
  <div
    :id="id"
    :class="['ui-menu', { 'ui-menu--fixed': props.fixed }]"
    :style="fixedPosition"
    aria-haspopup="true"
    :aria-expanded="isActive"
  >
    <div
      ref="activatorRef"
      class="ui-menu__activator"
    >
      <slot
        name="activator"
        :toggle="toogleActive"
      />
    </div>
    <teleport to="#ui-menu-zone">
      <transition name="fade-fast">
        <div
          v-if="isActive"
          ref="contentRef"
          class="ui-menu__content"
          :aria-labelledby="id"
          :style="stylePosition"
        >
          <slot :close="close" />
        </div>
      </transition>
    </teleport>
  </div>
</template>

<style lang="scss">
  .ui-menu {
    display: inline-flex;
    position: relative;
    overflow: visible;

    &__activator {
      margin-bottom: auto;
    }

    &__content {
      background-color: var(--ui-background-color, #fff);
      border-radius: 4px;
      box-shadow: 0 0 4px var(--ui-color-grey--20);
      position: fixed;
      width: max-content;
      max-width: 93vw;
      max-height: 95vh;
      transform: translateX(var(--ui-menu-left,0)) translateY(var(--ui-menu-top,0));
      overflow: hidden;
    }

    &--fixed {
      position: fixed;
    }
  }
</style>