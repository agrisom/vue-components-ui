<template>
<router-link v-if="props.to && !props.disabled" :class="classes" :to="props.to">
  <slot>
    <UIButtonContent :text="props.text" :icon="props.icon" :loading="props.loading" :iconSize="iconSizeComp"/>
  </slot>
</router-link>
<a v-else-if="props.href && !props.disabled" :class="classes" :href="props.href" target="_blank" rel="noopener noreferrer">
  <slot>
    <UIButtonContent :text="props.text" :icon="props.icon" :loading="props.loading" :iconSize="iconSizeComp"/>
  </slot>
</a>
<button v-else :class="classes" :type="props.type" @click="clicked" :disabled="props.disabled">
  <slot>
    <UIButtonContent :text="props.text" :icon="props.icon" :loading="props.loading" :iconSize="iconSizeComp"/>
  </slot>
</button>
</template>

<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';
import { computed } from 'vue';
import type { Size, SizeX } from '@/shared/types/sizes';
import type ButtonType from './ButtonType';
import type ButtonAlign from './ButtonAlign';
import type ButtonTheme from './ButtonTheme';
import type ButtonColor from './ButtonColor';
import UIButtonContent from './UIButtonContent.vue';

interface Props {
  // content
  type?: ButtonType,
  icon?: string,
  text?: string,
  href?: string,
  to?: RouteLocationRaw,
  // view
  theme?: ButtonTheme,
  color?: ButtonColor,
  size?: Size,
  iconSize?: SizeX,
  align?: ButtonAlign,
  block?: boolean,
  reverseOrder?: boolean,
  // status
  disabled?: boolean,
  loading?: boolean,
}

const props: Readonly<Props> = withDefaults(defineProps<Props>(), {
  type: 'button',
  theme: 'transparent',
  color: 'default',
  size: 'md',
  align: 'center',
});

const emit = defineEmits(['clicked']);

const classes = computed(() => [
  'button',
  'button--theme-' + props.theme,
  'button--color-' + props.color,
  'button--align-' + props.align,
  'button--size-' + props.size,
  {
    'button--block': props.block,
    'button--reverse': props.reverseOrder,
    // 'button--rounded': props.icon && !props.text,
    'button--disabled': props.disabled,
  },
]);

const iconSizeComp = computed(() => props.iconSize ?? props.size);

function clicked(event: MouseEvent) {
  emit('clicked', event);
}

</script>

<style lang="scss">
.button {
  --button-gutter: var(--ui-global-gutter, 0.25rem);
  --button-padding: calc(var(--button-gutter) * 2);
  --button-color: rgb(128, 128, 128);
  --button-bg-color: transparent;
  --button-text-color: var(--ui-global-color-black, hsl(0, 0%, 11%));
  --button-border-color: transparent;
  border: 0;
  border-radius: 2rem;
  background-color: var(--button-bg-color);
  color: var(--button-text-color);
  display: inline-flex;
  // outline: none;
  appearance: none;
  text-decoration: none;
  cursor: pointer;
  box-sizing: border-box;
  align-items: center;
  gap: calc(var(--button-gutter)*2);
  padding: var(--button-padding) calc(var(--button-padding)*3);
  box-shadow: 0px 0px 0px 2px var(--button-border-color) inset;
  background-position: center;
  transition: background, color;
  transition-duration: 0.5s;
  font-size: var(--button-font-size);
  &:hover {
    background: var(--button-bg-color) radial-gradient(circle, transparent 1%, var(--button-bg-color) 1%) center/15000%;
    text-decoration: none;
    -webkit-text-stroke: 0;
  }
  &:active {
    background-size: 100%;
    transition-duration: 0s;
  }
  &--size {
    &-sm {
      --button-font-size: calc(var(--button-gutter) * 3.5);
      --button-padding: var(--button-gutter);
    }
    &-md {
      --button-font-size: calc(var(--button-gutter) * 4);
      --button-padding: calc(var(--button-gutter) * 2);
    }
    &-lg {
      --button-font-size: calc(var(--button-gutter) * 4.5);
      --button-padding: calc(var(--button-gutter) * 2.5);
    }
  }
  &--theme {
    &-solid {
      --button-text-color: white;
      --button-border-color: var(--button-color);
      --button-bg-color: var(--button-color);
    }
    &-outline {
      --button-text-color: var(--button-color);
      --button-border-color: var(--button-color);
      --button-bg-color: transparent;
      &:hover, &:active {
        --button-text-color: white;
        --button-bg-color: var(--button-color);
      }
    }
    &-transparent {
      --button-text-color: var(--button-color);
      --button-border-color: transparent;
      --button-bg-color: transparent;
      &:hover, &:active {
        --button-text-color: white;
        --button-bg-color: var(--button-color);
      }
    }
    &-text {
      --button-text-color: var(--button-color);
      --button-border-color: transparent;
      --button-bg-color: transparent;
      --button-padding: 0;
      &:hover {
        text-decoration: underline;
        -webkit-text-stroke: 0.5px;
      }
    }
  }
  &--color {
    &-default {
      --button-color: var(--ui-global-color-grey--400);
      &:hover, &:focus {
        --button-color: var(--ui-global-color-grey--600);
      }
      &:active {
        --button-color: var(--ui-global-color-grey--800);
      }
    }
    &-primary {
      --button-color: var(--ui-global-color-primary--400);
      &:hover, &:focus {
        --button-color: var(--ui-global-color-primary--600);
      }
      &:active {
        --button-color: var(--ui-global-color-primary--800);
      }
    }
    &-secondary {
      --button-color: var(--ui-global-color-secondary--400);
      &:hover, &:focus {
        --button-color: var(--ui-global-color-secondary--600);
      }
      &:active {
        --button-color: var(--ui-global-color-secondary--800);
      }
    }
    &-success {
      --button-color: var(--ui-global-color-success--400);
      &:hover, &:focus {
        --button-color: var(--ui-global-color-success--600);
      }
      &:active {
        --button-color: var(--ui-global-color-success--800);
      }
    }
    &-warning {
      --button-color: var(--ui-global-color-warning--400);
      &:hover, &:focus {
        --button-color: var(--ui-global-color-warning--600);
      }
      &:active {
        --button-color: var(--ui-global-color-warning--800);
      }
    }
    &-error {
      --button-color: var(--ui-global-color-error--400);
      &:hover, &:focus {
        --button-color: var(--ui-global-color-error--600);
      }
      &:active {
        --button-color: var(--ui-global-color-error--800);
      }
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
  &--block {
    display: flex;
    width: 100%;
  }
  &--loading {
    pointer-events: none;
  }
  &--reverse {
    flex-direction: row-reverse;
  }
  &--disabled {
    cursor: not-allowed;
    opacity: 0.6;
    &:hover, &:active {
      opacity: 0.8;
    }
  }
}
</style>