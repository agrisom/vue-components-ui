<template lang="pug">
span.label {{ props.text }}
</template>

<script setup lang="ts">
interface Props {
  text: string;
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  color: '#000',
});
</script>

<style lang="scss">
.label {
  --label-color: v-bind(props.color);
  color: var(--label-color);
}
</style>