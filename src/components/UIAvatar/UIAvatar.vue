<template>
  <UITooltip :text="props.name ? props.name : props.id">
    <div
      :class="['ui-avatar', 'ui-avatar--size-' + props.size, 'ui-avatar--color-' + props.color]"
    >
      <UIIcon
        v-if="props.icon"
        :name="props.icon"
        :size="iconSizeC"
      />
      <span v-else>{{ initials }}</span>
    </div>
  </UITooltip>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import type { Icon } from '@/shared/types/icon.type';
import type { SizeX } from '@/shared/types/size.type';
import type { Color } from '@/shared/types/color.type';

import UIIcon from '@/components/UIIcon/UIIcon.vue';
import UITooltip from '@/components/UITooltip/UITooltip.vue';

const props = withDefaults(defineProps<{
  name: string;
  id?: string;
  icon?: Icon;
  color?: Color;
  size?: SizeX;
  iconSize?: SizeX;
}>(), {
  size: 'md',
  id: undefined,
  icon: undefined,
  color: undefined,
  iconSize: undefined,
});

const initials = computed(() => {
  let initials = '';
  if (props.name) {
    props.name.split(' ').forEach(str => initials = initials.concat(str.charAt(0)));
  }
  return initials.toUpperCase().substring(0, 2);
});
const iconSizeC = computed(() => props.iconSize ? props.iconSize : props.size);
</script>

<style lang="scss">
.ui-avatar {
  --ui-avatar-size: 24px;
  --ui-avatar-font-size: #{variables.$gutter};
  --ui-avatar-font-color: var(--ui-color-white);
  --ui-avatar-bg-color: var(--ui-color-primary--30);
  display: flex;
  color: var(--ui-avatar-font-color);
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-sizing: border-box;
  width: var(--ui-avatar-size);
  height: var(--ui-avatar-size);
  background-color: var(--ui-avatar-bg-color);
  border-radius: 50%;
  font-weight: 600;
  font-size: var(--ui-avatar-font-size);

  &--color {
    &-default {
      --ui-avatar-bg-color: var(--ui-color-grey--70);
    }
    &-primary {
      --ui-avatar-bg-color: var(--ui-color-primary--30);
    }
    &-secondary {
      --ui-avatar-bg-color: var(--ui-color-secondary--30);
    }
    &-success {
      --ui-avatar-bg-color: var(--ui-color-success--30);
    }
    &-warning {
      --ui-avatar-bg-color: var(--ui-color-warning--30);
    }
    &-error {
      --ui-avatar-bg-color: var(--ui-color-error--30);
    }
  }

  &--size {
    &-xs {
      --ui-avatar-size: 18px;
      --ui-avatar-font-size: #{variables.$gutter};
    }
    &-sm {
      --ui-avatar-size: 24px;
      --ui-avatar-font-size: #{variables.$gutter*2};
    }
    &-md {
      --ui-avatar-size: 32px;
      --ui-avatar-font-size: #{variables.$gutter*3};
    }
    &-lg {
      --ui-avatar-size: 48px;
      --ui-avatar-font-size: #{variables.$gutter*4};
    }
    &-xl {
      --ui-avatar-size: 56px;
      --ui-avatar-font-size: #{variables.$gutter*5};
    }
  }
}
</style>