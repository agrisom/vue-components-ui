<script setup lang="ts">
import UIIcon from '@/components/UIIcon/UIIcon.vue';
import UILoader from '@/components/UILoader/UILoader.vue';

import type { Icon } from '@/shared/types/icon.type';
import type { SizeX } from '@/shared/types/size.type';
import type { Color } from '@/shared/types/color.type';

const props = withDefaults(defineProps<{
  loading?: boolean;
  text?: string;
  icon?: Icon;
  iconSize?: SizeX;
  color?: Color;
}>(), {
  text: undefined,
  icon: undefined,
  color: 'default',
  iconSize: 'md',
});
</script>

<template>
  <UILoader
    v-if="props.loading"
    class="ui-button__loading"
    :size="props.iconSize"
    :color="props.color"
  />
  <UIIcon
    v-else-if="props.icon"
    class="ui-button__icon"
    :name="props.icon"
    :size="props.iconSize"
  />
  <span
    v-if="props.text"
    class="ui-button__text"
  >{{ props.text }}</span>
</template>