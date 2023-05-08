<script setup lang="ts">
import { computed, ref } from 'vue';
import ButtonContent from './ButtonContent.vue';

import type { Icon } from '@/shared/types/icon.type';
import type { Size, SizeX } from '@/shared/types/size.type';
import type { ThemeButton, TypeButton, AlignButton, ColorButton } from './UIButton.types';
import type { RouteLocationRaw } from 'vue-router';

export interface Props {
  type?: TypeButton;
  theme?: ThemeButton;
  color?: ColorButton;
  size?: Size;
  iconSize?: SizeX;
  align?: AlignButton;
  icon?: Icon;
  text?: string;
  href?: string;
  to?: RouteLocationRaw;
  target?: string;
  block?: boolean;
  reverseOrder?: boolean;
  disabled?: boolean;
  loading?: boolean;
  class?: string;
}

const props: Readonly<Props> = withDefaults(defineProps<Props>(), {
  type: 'button',
  theme: 'transparent',
  color: 'default',
  size: 'md',
  align: 'center',
  target: '_blank',
});

const emit = defineEmits<{
  (e: 'clicked', event: Event): void;
}>();

const classes = computed(() => [
  'button',
  'button--theme-' + props.theme,
  'button--color-' + props.color,
  'button--align-' + props.align,
  'button--size-' + props.size,
  {
    'button--block': props.block,
    'button--reverse': props.reverseOrder,
    'button--rounded': props.icon && !props.text && props.theme !== 'text',
    'button--disabled': props.disabled,
    'button--loading': props.loading,
  },
  props.class,
]);
const iconSizeComp = computed(() => props.iconSize ? props.iconSize : (props.theme === 'text' ? props.size === 'lg' ? 'sm' : 'xs' : props.size));
const colorComp = computed(() => props.theme === 'solid' ? undefined : props.color);

function clicked(event: MouseEvent) {
  if (!props.disabled) {
    emit('clicked', event);
  }
}

const buttonRef = ref<HTMLButtonElement>();
function focus() {
  if(buttonRef.value) buttonRef.value.focus();
}

defineExpose({
  focus,
});
</script>
  
<template>
  <router-link v-if="props.to && !props.disabled" ref="buttonRef" :class="classes" :to="props.to" @click="clicked($event)">
    <slot>
      <ButtonContent :text="props.text" :icon="props.icon" :loading="props.loading" :color="colorComp"
        :iconSize="iconSizeComp" />
    </slot>
  </router-link>
  <a v-else-if="props.href && !props.disabled" ref="buttonRef" :class="classes" :href="props.href" :target="props.target" @click="clicked($event)">
    <slot>
      <ButtonContent :text="props.text" :icon="props.icon" :loading="props.loading" :color="colorComp"
        :iconSize="iconSizeComp" />
    </slot>
  </a>
  <button v-else ref="buttonRef" :class="classes" :type="props.type" :disabled="props.disabled" @click="clicked($event)">
    <slot>
      <ButtonContent :text="props.text" :icon="props.icon" :loading="props.loading" :color="colorComp"
        :iconSize="iconSizeComp" />
    </slot>
  </button>
</template>

<style lang="scss">
.button {
  --button-padding: calc(var(--ui-gutter) * 2);
  border: 0;
  border-radius: 2rem;
  background-color: var(--button-bg-color);
  color: var(--button-text-color);
  font-weight: 600;
  display: inline-flex;
  outline: none;
  appearance: none;
  text-decoration: none;
  cursor: pointer;
  box-sizing: border-box;
  align-items: center;
  gap: calc(var(--ui-gutter) * 2);
  padding: var(--button-padding) calc(var(--button-padding)*3);
  box-shadow: 0px 0px 0px 1px var(--button-border-color) inset;
  background-position: center;
  transition: background, color;
  transition-duration: 0.5s;

  &:hover {
    background: var(--button-bg-color) radial-gradient(circle, transparent 1%, var(--button-bg-color) 1%) center/15000%;
    text-decoration: none;
    text-stroke: 0;
    -webkit-text-stroke: 0;
  }

  &:active {
    background-size: 100%;
    transition-duration: 0s;
  }

  &__icon {
    display: flex;
  }

  &__text {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-align: left;
    word-break: break-all;
  }

  &__loading {
    display: flex;
  }

  &--size {
    &-sm {
      @include functions.text--sm;
      --button-padding: var(--ui-gutter);
    }

    &-md {
      @include functions.text--md;
      --button-padding: calc(var(--ui-gutter) * 2);
    }

    &-lg {
      @include functions.text--lg;
      --button-padding: calc(var(--ui-gutter) * 2.5);
    }
  }

  &--theme {
    &-solid {
      text-transform: uppercase;
      --button-text-color: var(--ui-background-color);
      --button-text-color: white;
      --button-border-color: var(--button-color);
      --button-bg-color: var(--button-color);
    }

    &-outline {
      text-transform: uppercase;
      --button-text-color: var(--button-color);
      --button-border-color: var(--button-color);
      --button-bg-color: transparent;

      &:hover,
      &:focus,
      &:active {
        --button-text-color: var(--ui-background-color);
        --button-bg-color: var(--button-color);
      }
    }

    &-transparent {
      --button-text-color: var(--button-color);
      --button-border-color: transparent;
      --button-bg-color: transparent;

      &:hover,
      &:focus,
      &:active {
        --button-text-color: var(--ui-background-color);
        --button-bg-color: var(--button-color);
      }
    }

    &-text {
      --button-text-color: var(--button-color);
      --button-border-color: transparent;
      --button-bg-color: transparent;
      --button-padding: 0;
      font-weight: normal;

      &:hover {
        text-decoration: underline;
        text-stroke: 0.5px;
        -webkit-text-stroke: 0.5px;
      }

      &:focus {
        outline: auto;
        border-radius: 0;
      }
    }
  }

  &--color {
    &-default {
      --button-color: var(--ui-font-color-main);

      &:hover,
      &:focus {
        --button-color: var(--ui-color-grey--80);
      }

      &:active {
        --button-color: var(--ui-color-black);
      }
    }

    &-primary {
      --button-color: var(--ui-color-primary--30);

      &:hover,
      &:focus {
        --button-color: var(--ui-color-primary--40);
      }

      &:active {
        --button-color: var(--ui-color-primary--50);
      }
    }

    &-secondary {
      --button-color: var(--ui-color-secondary--30);

      &:hover,
      &:focus {
        --button-color: var(--ui-color-secondary--40);
      }

      &:active {
        --button-color: var(--ui-color-secondary--50);
      }
    }
  }

  &--block {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  &--rounded {
    padding: var(--button-padding);
    margin-top: auto;
    margin-bottom: auto;

    .button__text {
      display: none;
    }

    &.button {
      &--size {
        &-sm {
          height: calc(var(--ui-gutter) * 8);
          width: calc(var(--ui-gutter) * 8);
          min-height: calc(var(--ui-gutter) * 8);
          min-width: calc(var(--ui-gutter) * 8);
        }

        &-md {
          height: calc(var(--ui-gutter) * 10);
          width: calc(var(--ui-gutter) * 10);
          min-height: calc(var(--ui-gutter) * 10);
          min-width: calc(var(--ui-gutter) * 10);
        }

        &-lg {
          height: calc(var(--ui-gutter) * 14);
          width: calc(var(--ui-gutter) * 14);
          min-height: calc(var(--ui-gutter) * 14);
          min-width: calc(var(--ui-gutter) * 14);
        }
      }
    }
  }

  &--loading {
    pointer-events: none;
  }

  &--reverse {
    flex-direction: row-reverse;
  }

  &--disabled {
    cursor: not-allowed;
    --button-color: var(--ui-color-grey--20);

    &:hover,
    &:focus,
    &:active {
      --button-color: var(--ui-color-grey--30);
    }
  }

  &--align {
    &-left {
      justify-content: flex-start;
    }

    &-center {
      justify-content: center;
    }

    &-right {
      justify-content: flex-end;
    }

    &-space-between {
      justify-content: space-between;
    }
  }
}
</style>