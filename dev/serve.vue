<script lang="ts">
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
import { UILabel } from '@/entry.esm';

export default defineComponent({
    name: "ServeDev",
    components: { UILabel }
});
</script>

<template>
  <div id="app">
    <vue-components-ui-sample />
    <UILabel text="Hello world"/>
  </div>
</template>
