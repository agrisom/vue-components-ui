<script setup lang="ts">
import { computed } from 'vue';
import UIButton from '@/components/UIButton/UIButton.vue';

import type { Size, SizeX } from '@/shared/types/size.type';

const props = withDefaults(defineProps<{
  text?: string;
  close?: boolean;
  size?: Size;
}>(), {
  text: '',
  size: 'md',
});

const emit = defineEmits<{
  (e: 'close', event: Event): void;
}>();

const sizeC = computed<SizeX>(() => props.size === 'lg' ? 'sm' : 'xs');

function emitClose(event: Event) {
  emit('close', event);
}
</script>

<template>
  <div :class="['ui-chip', 'ui-chip--size-' + props.size, {'ui-chip--close': props.close}]">
    <slot>
      <span
        v-overflow-title
        class="ui-chip__content"
      >
        {{ props.text }}
      </span>
    </slot>
    <UIButton
      v-if="props.close"
      class="ui-chip__close"
      icon="close"
      :size="size"
      :icon-size="sizeC"
      @clicked="emitClose"
    />
  </div>
</template>

<style lang="scss">
.ui-chip {
  --ui-chip-bg-color: var(--ui-color-primary--20);
  --ui-chip-color: var(--ui-color-primary--50);
  display: inline-flex;
  align-items: center;
  gap: var(--ui-chip-gap, #{variables.$gutter});
  max-width: 100%;
  padding: 0 var(--ui-chip-padding);
  border-radius: variables.$gutter*12;
  color: var(--ui-chip-color);
  background-color: var(--ui-chip-bg-color);
  box-sizing: border-box;

  &__content {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 25ch;
  }

  &__close:is(.ui-button) {
    min-height: 100%;
    max-height: 100%;
    aspect-ratio: 5 / 4;
    width: auto;
    min-width: auto;
    --ui-button-color: var(--ui-chip-color);
  }

  &--size {
    &-sm {
      @include functions.text--sm;
      --ui-chip-gap: #{variables.$gutter * 2};
      --ui-chip-padding: #{variables.$gutter * 3};
      height: 1.75rem;
    }

    &-md {
      @include functions.text--md;
      --ui-chip-gap: #{variables.$gutter*2};
      --ui-chip-padding: #{variables.$gutter * 4};
      height: 2.25rem;
    }

    &-lg {
      @include functions.text--lg;
      --ui-chip-gap: #{variables.$gutter*3};
      --ui-chip-padding: #{variables.$gutter * 5};
      height: 3rem;
    }
  }

  &--close {
    padding-right: 0;
  }
}
</style>