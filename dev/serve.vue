<script lang="ts">
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { VueComponentsUiSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  VueComponentsUiSample,
  // }
});
</script>

<template>
  <div id="app">
    <vue-components-ui-sample />
  </div>
</template>
