<script setup lang="ts">
import { iconList } from '@/shared/types/icon.type';
import type { Icon } from '@/shared/types/icon.type';
import type { SizeX } from '@/shared/types/size.type';

export interface Props {
  name: Icon;
  description?: string;
  size?: SizeX;
}
const props: Readonly<Props> = withDefaults(defineProps<Props>(), {
  name: iconList[0],
  size: 'md',
});
</script>
  
<template>
  <div class="icon__container">
    <svg :class="['icon', 'icon--size-' + props.size]">
      <desc>{{ props.description ? props.description : props.name }}</desc>
      <use :href="`#${props.name}`" />
    </svg>
  </div>
</template>

<style lang="scss">
.icon {
  color: currentColor;
  flex-shrink: 0;
  height: var(--icon-size, 24px);
  width: var(--icon-size, 24px);

  &__container {
    display: contents;
  }

  &--size {
    &-xs {
      --icon-size: 12px;
    }

    &-sm {
      --icon-size: 16px;
    }

    &-md {
      --icon-size: 24px;
    }

    &-lg {
      --icon-size: 36px;
    }

    &-xl {
      --icon-size: 48px;
    }
  }
}
</style>