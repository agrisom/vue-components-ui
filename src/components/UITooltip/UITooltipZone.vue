<template>
  <div
    id="ui-tooltip-zone"
    class="ui-tooltip-zone"
  />
</template>

<style>
#ui-tooltip-zone {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100;
  pointer-events: none;

  & > * {
    pointer-events: unset;
  }
}
</style>