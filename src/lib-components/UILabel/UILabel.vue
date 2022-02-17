<template lang="pug">
span.label {{ text }}
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UILabel',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss">
@import "./UILabel.scss";
</style>