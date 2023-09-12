<script setup lang="ts">
import { Size } from '@/shared/types/size.type';

const props = withDefaults(defineProps<{
  text: string;
  color?: string;
  size?: Size;
}>(), {
  color: '#D9E4F6',
  size: 'md',
});
</script>

<template>
  <div
    :class="['ui-tag', 'ui-tag--size-' + props.size]"
    :style="`--ui-tag-color: ${props.color}`"
  >
    <div class="ui-tag__text">
      {{ props.text }}
    </div>
  </div>
</template>

<style lang="scss">
  .ui-tag {
    display: inline-flex;
    align-items: center;
    font-weight: bold;
    color: #5474AB;
    margin: auto 0;
    background-color: var(--ui-tag-color);

    &__text {
      text-transform: capitalize;
      display: -webkit-box;
      overflow: hidden;
      word-break: break-all;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
    }

    &--size {
      &-sm {
        border-radius: variables.$gutter*4;
        font-size: .75rem;
        padding: 0 variables.$gutter*2;
      }

      &-md {
        border-radius: variables.$gutter*5;
        font-size: .875rem;
        padding: variables.$gutter*0.8 variables.$gutter*3;
      }

      &-lg {
        border-radius: variables.$gutter*7;
        font-size: 1rem;
        padding: variables.$gutter*1.5 variables.$gutter*2.5;
      }
    }
  }
</style>