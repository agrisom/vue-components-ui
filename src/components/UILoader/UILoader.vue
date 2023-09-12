<script setup lang="ts">
import UIIcon from '@/components/UIIcon/UIIcon.vue';

import type { Color } from '@/shared/types/color.type';
import type { SizeX } from '@/shared/types/size.type';
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  block?: boolean;
  size?: SizeX;
  color?: Color;
}>(), {
  size: 'md',
  color: 'default',
});

const classes = computed(() => [
  'ui-loader',
  {
    'ui-loader--block': props.block,
  },
  'ui-loader--size-' + props.size,
  'ui-loader--color-' + props.color,
]);
</script>

<template>
  <div :class="classes">
    <UIIcon
      class="ui-loader__icon"
      name="loading"
      :size="props.size"
      title="Loading"
    />
  </div>
</template>

<style lang="scss">
.ui-loader {
  animation: spin 1s steps(8, end) infinite;
  width: var(--ui-loader-size, 2rem);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ui-loader-color);

  &--block {
    display: inline-flex;
  }

  &--size {
    &-xs {
      --ui-loader-size: #{variables.$gutter*3};
    }

    &-sm {
      --ui-loader-size: #{variables.$gutter*4};
    }

    &-md {
      --ui-loader-size: #{variables.$gutter*6};
    }

    &-lg {
      --ui-loader-size: #{variables.$gutter*9};
    }

    &-xl {
      --ui-loader-size: #{variables.$gutter*12};
    }
  }

  &--color {
    &-default {
      --ui-loader-color: currentColor;
    }

    &-primary {
      --ui-loader-color: var(--ui-color-primary--30);
    }

    &-secondary {
      --ui-loader-color: var(--ui-color-secondary--30);
    }

    &-success {
      --ui-loader-color: var(--ui-color-success--30);
    }

    &-warning {
      --ui-loader-color: var(--ui-color-warning--30);
    }

    &-error {
      --ui-loader-color: var(--ui-color-error--30);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}
</style>