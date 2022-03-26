<template>
<span class="label">{{ props.text }}</span>
<p>
  <b>props.color:</b><br />
  <input type="color" :value="props.color" @change="changeColor" />
  <span class="label">{{ props.color }}</span>
</p>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  text: string;
  color?: string;
}
const props: Readonly<Props> = withDefaults(defineProps<Props>(), {
  color: '#000',
});
const emit = defineEmits<{
  (e: 'update:color', color: string): void
}>();

const colorC = computed(() => props.color ?? '#000');

function changeColor(event: Event) {
  if (event.target) {
    emit('update:color', (event.target as HTMLInputElement).value);
  }
}
</script>

<style lang="scss">
.label {
  --label-color: v-bind(colorC);
  color: var(--label-color);
}
</style>