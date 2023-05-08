<script setup lang="ts">
import UIIcon from '@/components/UIIcon/UIIcon.vue';
import UILoader from '@/components/UILoader/UILoader.vue';

import type { Icon } from '@/shared/types/icon.type';
import type { SizeX } from '@/shared/types/size.type';

export interface Props {
  loading?: boolean;
  text?: string;
  icon?: Icon;
  iconSize?: SizeX;
}

const props: Readonly<Props> = withDefaults(defineProps<Props>(), {
  iconSize: 'md',
});
</script>

<template>
  <UILoader class="button__loading" v-if="props.loading" :size="props.iconSize" />
  <UIIcon class="button__icon" v-else-if="props.icon" :name="props.icon" :size="props.iconSize" />
  <span class="button__text" v-if="props.text">{{ props.text }}</span>
</template>