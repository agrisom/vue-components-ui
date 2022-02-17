<template>
<label class="label">{{ text }}</label>
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