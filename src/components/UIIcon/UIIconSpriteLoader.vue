<script setup lang="ts">
const props = defineProps<{
  sprite: string;
}>();
</script>

<template>
  <div class="ui-icon-sprite">
    <iframe
      :src="props.sprite"
      onload="this.before((this.contentDocument.body||this.contentDocument).children[0]);this.remove()"
    />
  </div>
</template>

<style>
.ui-icon-sprite {
  display: none;
}
</style>