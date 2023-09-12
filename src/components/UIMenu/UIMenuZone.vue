<template>
  <div
    id="ui-menu-zone"
    class="ui-menu-zone"
  />
</template>

<style>
#ui-menu-zone {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 20;
  pointer-events: none;

  & > * {
    pointer-events: all;
  }
}
</style>