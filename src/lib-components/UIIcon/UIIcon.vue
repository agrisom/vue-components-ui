<template>
<svg :class="['icon', 'icon--size-'+sizeC]">
  <desc>{{ description ? description : name }}</desc>
  <use :href="'#'+name" />
</svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { SizeX } from '@/shared/types/sizes';

interface Props {
  name: string,
  description?: string,
  size?: SizeX,
  width?: string,
  height?: string,
}

const props: Readonly<Props> = withDefaults(defineProps<Props>(), {
  size: 'md',
});

const sizeC = computed(() => (props.height && props.width) ? 'custom' : props.size);
const widthC = computed(() => props.width ?? '24px');
const heightC = computed(() => props.height ?? '24px');
</script>

<style lang="scss">
.icon {
  --icon-gutter: var(--ui-global-gutter, 0.25rem);
  color: currentColor;
  flex-shrink: 0;
  height: var(--icon-size, 24px);
  width: var(--icon-size, 24px);
  &--size {
    &-xs {
      --icon-size: calc(var(--icon-gutter) * 3);
    }
    &-sm {
      --icon-size: calc(var(--icon-gutter) * 4);
    }
    &-md {
      --icon-size: calc(var(--icon-gutter) * 6);
    }
    &-lg {
      --icon-size: calc(var(--icon-gutter) * 9);
    }
    &-xl {
      --icon-size: calc(var(--icon-gutter) * 12);
    }
    &-custom {
      height: v-bind(widthC);
      width: v-bind(heightC);
    }
  }
}
</style>