<template>
<!-- <UILoader class="button__loading" v-if="loading" :size="iconSize" :color="color" /> -->
<UIIcon class="button__loading" v-if="props.loading" name="loading" :size="props.iconSize" :color="props.color" />
<UIIcon class="button__icon" v-else-if="props.icon" :name="props.icon" :size="props.iconSize" />
<span class="button__text" v-if="props.text">{{ props.text }}</span>
</template>

<script setup lang="ts">
import UIIcon from '@/lib-components/UIIcon/UIIcon.vue';
import type { SizeX } from 'Shared/sizes';

interface Props {
  text?: string,
  icon?: string,
  loading?: boolean,
  iconSize?: SizeX,
  color?: string,
};

const props: Readonly<Props> = withDefaults(defineProps<Props>(), {
  iconSize: 'md',
  color: 'default',
});

</script>