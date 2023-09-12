<script setup lang="ts">
import { computed, ref, useSlots } from 'vue';
import ButtonContent from './ButtonContent.vue';

import type { Icon } from '@/shared/types/icon.type';
import type { Size, SizeX } from '@/shared/types/size.type';
import type { Color } from '@/shared/types/color.type';
import type { ThemeButton, TypeButton, AlignButton } from './UIButton.types';
import type { RouteLocationRaw } from 'vue-router';

const props = withDefaults(defineProps<{
  type?: TypeButton;
  theme?: ThemeButton;
  color?: Color;
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
  referrer?: boolean;
  rounded?: boolean;
  class?: string;
}>(), {
  type: 'button',
  theme: 'transparent',
  color: 'default',
  size: 'md',
  iconSize: undefined,
  align: 'center',
  icon: undefined,
  text: undefined,
  href: undefined,
  to: undefined,
  target: '_blank',
  class: undefined,
});

const emit = defineEmits<{
  (e: 'clicked', event: Event): void;
}>();

const slots = useSlots();

const classes = computed(() => [
  'ui-button',
  'ui-button--theme-' + props.theme,
  'ui-button--color-' + props.color,
  'ui-button--align-' + props.align,
  'ui-button--size-' + props.size,
  {
    'ui-button--block': props.block,
    'ui-button--reverse': props.reverseOrder,
    'ui-button--rounded': props.rounded || (props.icon && !props.text && props.theme !== 'text' && !slots['default']),
    'ui-button--disabled': props.disabled,
    'ui-button--loading': props.loading,
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

const relValue = computed(() => {
  const value = ['noopener'];
  if (!props.referrer) value.push('noreferrer');
  return value.join(' ');
});

const buttonRef = ref<HTMLButtonElement>();
function focus() {
  if (buttonRef.value) buttonRef.value.focus();
}

defineExpose({
  focus,
});
</script>

<template>
  <router-link
    v-if="props.to && !props.disabled"
    ref="buttonRef"
    :class="classes"
    :to="props.to"
    @click="clicked($event)"
  >
    <slot>
      <ButtonContent
        :text="props.text"
        :icon="props.icon"
        :loading="props.loading"
        :color="colorComp"
        :icon-size="iconSizeComp"
      />
    </slot>
  </router-link>
  <a
    v-else-if="props.href && !props.disabled"
    ref="buttonRef"
    :class="classes"
    :href="props.href"
    :target="props.target"
    :rel="relValue"
    @click="clicked($event)"
  >
    <slot>
      <ButtonContent
        :text="props.text"
        :icon="props.icon"
        :loading="props.loading"
        :color="colorComp"
        :icon-size="iconSizeComp"
      />
    </slot>
  </a>
  <button
    v-else
    ref="buttonRef"
    :class="classes"
    :type="props.type"
    :disabled="props.disabled"
    @click="clicked($event)"
  >
    <slot>
      <ButtonContent
        :text="props.text"
        :icon="props.icon"
        :loading="props.loading"
        :color="colorComp"
        :icon-size="iconSizeComp"
      />
    </slot>
  </button>
</template>

<style lang="scss">
.ui-button {
  --ui-button-padding: #{variables.$gutter*2};
  --ui-button-border-radius: 2rem;
  border: 0;
  border-radius: var(--ui-button-border-radius);
  background-color: var(--ui-button-bg-color);
  color: var(--ui-button-text-color);
  font-weight: 600;
  display: inline-flex;
  outline: none;
  appearance: none;
  text-decoration: none;
  cursor: pointer;
  box-sizing: border-box;
  align-items: center;
  gap: variables.$gutter*2;
  padding: var(--ui-button-padding) calc(var(--ui-button-padding)*3);
  box-shadow: 0px 0px 0px 1px var(--ui-button-border-color) inset;
  background-position: center;
  transition: background, color;
  transition-duration: 0.5s;

  &:hover {
    background: var(--ui-button-bg-color) radial-gradient(circle, transparent 1%, var(--ui-button-bg-color) 1%) center/15000%;
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
    align-self: center;
    word-break: break-all;
  }

  &__loading {
    display: flex;
  }

  &--size {
    &-sm {
      @include functions.text--sm;
      --ui-button-padding: #{variables.$gutter};
    }

    &-md {
      @include functions.text--md;
      --ui-button-padding: #{variables.$gutter*2};
    }

    &-lg {
      @include functions.text--lg;
      --ui-button-padding: #{variables.$gutter*2.5};
    }
  }

  &--theme {
    &-solid {
      --ui-button-text-color: var(--ui-background-color);
      --ui-button-border-color: var(--ui-button-color);
      --ui-button-bg-color: var(--ui-button-color);
    }

    &-outline {
      --ui-button-text-color: var(--ui-button-color);
      --ui-button-border-color: var(--ui-button-color);
      --ui-button-bg-color: transparent;

      &:hover,
      &:focus,
      &:active {
        --ui-button-text-color: var(--ui-background-color);
        --ui-button-bg-color: var(--ui-button-color);
      }
    }

    &-transparent {
      --ui-button-text-color: var(--ui-button-color);
      --ui-button-border-color: transparent;
      --ui-button-bg-color: transparent;

      &:hover,
      &:focus,
      &:active {
        --ui-button-text-color: var(--ui-background-color);
        --ui-button-bg-color: var(--ui-button-color);
      }
    }

    &-text {
      --ui-button-text-color: var(--ui-button-color);
      --ui-button-border-color: transparent;
      --ui-button-bg-color: transparent;
      --ui-button-padding: 0;
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
      --ui-button-color: var(--ui-color-grey--70);

      &:hover,
      &:focus {
        --ui-button-color: var(--ui-color-grey--90);
      }

      &:active {
        --ui-button-color: var(--ui-color-black);
      }
    }

    &-primary {
      --ui-button-color: var(--ui-color-primary--30);

      &:hover,
      &:focus {
        --ui-button-color: var(--ui-color-primary--40);
      }

      &:active {
        --ui-button-color: var(--ui-color-primary--50);
      }
    }

    &-secondary {
      --ui-button-color: var(--ui-color-secondary--30);

      &:hover,
      &:focus {
        --ui-button-color: var(--ui-color-secondary--40);
      }

      &:active {
        --ui-button-color: var(--ui-color-secondary--50);
      }
    }

    &-success {
      --ui-button-color: var(--ui-color-success--30);

      &:hover,
      &:focus {
        --ui-button-color: var(--ui-color-success--40);
      }

      &:active {
        --ui-button-color: var(--ui-color-success--50);
      }
    }

    &-warning {
      --ui-button-color: var(--ui-color-warning--30);

      &:hover,
      &:focus {
        --ui-button-color: var(--ui-color-warning--40);
      }

      &:active {
        --ui-button-color: var(--ui-color-warning--50);
      }
    }

    &-error {
      --ui-button-color: var(--ui-color-error--30);

      &:hover,
      &:focus {
        --ui-button-color: var(--ui-color-error--40);
      }

      &:active {
        --ui-button-color: var(--ui-color-error--50);
      }
    }
  }

  &--block {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  &--rounded {
    padding: var(--ui-button-padding);
    margin-top: auto;
    margin-bottom: auto;

    .ui-button__text {
      display: none;
    }

    &.ui-button {
      &--size {
        &-sm {
          height: variables.$gutter*8;
          width: variables.$gutter*8;
          min-height: variables.$gutter*8;
          min-width: variables.$gutter*8;
        }

        &-md {
          height: variables.$gutter*10;
          width: variables.$gutter*10;
          min-height: variables.$gutter*10;
          min-width: variables.$gutter*10;
        }

        &-lg {
          height: variables.$gutter*14;
          width: variables.$gutter*14;
          min-height: variables.$gutter*14;
          min-width: variables.$gutter*14;
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
    --ui-button-color: var(--ui-color-grey--40);
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