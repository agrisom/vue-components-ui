<script setup lang="ts">
import { listIcon } from '@/shared/types/icon.type';
import type { Icon } from '@/shared/types/icon.type';
import type { SizeX } from '@/shared/types/size.type';
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  name: Icon;
  description?: string;
  size?: SizeX;
}>(), {
  name: listIcon[0],
  description: undefined,
  size: 'md',
});

const classes = computed(() => [
  'ui-icon',
  'ui-icon--size-' + props.size,
]);
</script>

<template>
  <svg :class="classes">
    <desc>{{ props.description ? props.description : props.name }}</desc>
    <use :href="`#${props.name}`" />
  </svg>
</template>

<style lang="scss">
.ui-icon {
  flex-shrink: 0;
  height: var(--ui-icon-size, 24px);
  width: var(--ui-icon-size, 24px);

  use {
    color: currentColor;
  }

  &--size {
    &-xs {
      --ui-icon-size: 12px;
    }

    &-sm {
      --ui-icon-size: 16px;
    }

    &-md {
      --ui-icon-size: 24px;
    }

    &-lg {
      --ui-icon-size: 36px;
    }

    &-xl {
      --ui-icon-size: 48px;
    }
  }
}
</style>