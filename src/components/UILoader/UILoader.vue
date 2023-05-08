<script setup lang="ts">
import UIIcon from '@/components/UIIcon/UIIcon.vue';

import type { SizeX } from '@/shared/types/size.type';

export interface Props {
  block?: boolean;
  size?: SizeX;
}

const props: Readonly<Props> = withDefaults(defineProps<Props>(), {
  size: 'md',
});
</script>
  
<template>
  <div :class="['loader', { 'loader--block': props.block }, 'loader--size-'+props.size]">
    <UIIcon class="loader__icon" name="loading" :size="props.size" title="Loading" />
  </div>
</template>

<style lang="scss">
.loader {
  animation: spin 1s steps(8, end) infinite;
  border-bottom-color: transparent;
  width: var(--loader-size, 2rem);
  display: flex;
  align-items: center;
  justify-content: center;
  
  &__icon {
    color: currentColor;
  }

  &--block {
    display: inline-flex;
  }

  &--size {
    &-xs {
      --loader-size: 12px;
    }

    &-sm {
      --loader-size: 16px;
    }

    &-md {
      --loader-size: 24px;
    }

    &-lg {
      --loader-size: 36px;
    }

    &-xl {
      --loader-size: 48px;
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