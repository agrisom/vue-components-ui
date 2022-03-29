<template>
<!-- <UILoader class="button__loading" v-if="loading" :size="iconSize" /> -->
<UIIcon class="button__loading" v-if="props.loading" name="loading" :size="props.iconSize" />
<UIIcon class="button__icon" v-else-if="props.icon" :name="props.icon" :size="props.iconSize" />
<span class="button__text" v-if="props.text">{{ props.text }}</span>
</template>

<script setup lang="ts">
import UIIcon from '@/lib-components/UIIcon/UIIcon.vue';
import type { SizeX } from '@/shared/types/sizes';

interface Props {
  text?: string,
  icon?: string,
  loading?: boolean,
  iconSize?: SizeX,
};

const props: Readonly<Props> = withDefaults(defineProps<Props>(), {
  iconSize: 'md',
});

</script>