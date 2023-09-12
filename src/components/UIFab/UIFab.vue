<script setup lang="ts">
import { computed } from 'vue';
import UIMenu from '@/components/UIMenu/UIMenu.vue';
import UIButton from '@/components/UIButton/UIButton.vue';

import type { FabItem } from './UIFab.types';

const props = withDefaults(defineProps<{
  actions?: FabItem[];
  compactView?: boolean;
}>(), {
  actions: () => [] as FabItem[],
});

const emit = defineEmits<{
  (e: 'clicked', value: string): void;
}>();

const buttonsShowed = computed(() => {
  if (!props.compactView && props.actions !== undefined) {
    return props.actions.filter((item: FabItem) => {
      return item.show === true;
    });
  }
  return [];
});

const buttonsGrouped = computed(() => {
  if (props.compactView) {
    return props.actions ?? [];
  } else if (props.actions !== undefined) {
    return props.actions.filter((item: FabItem) => {
      return item.show !== true;
    });
  }
  return [];
});

function emitValue(value: string, callback?: () => void) {
  if (callback !== undefined) {
    callback();
  }
  emit('clicked', value);
}
</script>

<template>
  <div class="ui-fab">
    <UIButton
      v-for="button in buttonsShowed"
      :key="button.value"
      class="ui-fab__float"
      :icon="button.icon"
      :text="button.text"
      size="sm"
      theme="solid"
      color="primary"
      @clicked="emitValue(button.value)"
    />
    <template v-if="!props.compactView && buttonsGrouped.length === 1">
      <UIButton
        v-for="button in buttonsGrouped"
        :key="button.value"
        class="ui-fab__float"
        :icon="button.icon"
        :text="button.text"
        size="sm"
        theme="solid"
        color="primary"
        @clicked="emitValue(button.value)"
      />
    </template>
    <UIMenu v-else-if="props.compactView || buttonsGrouped.length > 1">
      <template #activator="{toggle}">
        <UIButton
          class="ui-fab__float ui-fab__dots"
          icon="more-vertical"
          theme="solid"
          color="primary"
          @clicked="toggle"
        />
      </template>
      <template #default="{close}">
        <ul class="ui-fab__list">
          <li
            v-for="button in buttonsGrouped"
            :key="button.value"
          >
            <UIButton
              :icon="button.icon"
              :text="button.text"
              size="sm"
              block
              align="left"
              :color="button.color"
              @clicked="emitValue(button.value, close)"
            />
          </li>
        </ul>
      </template>
    </UIMenu>
  </div>
</template>

<style lang="scss">
  .ui-fab {
    position: fixed;
    right: 2rem;
    bottom: 1rem;
    display: flex;
    gap: variables.$gutter * 2;
    align-items: center;
    z-index: 10;

    &__float {
      box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.15);
    }

    &__dots {
      transform: scale(0.8);
    }

    &__list {
      display: flex;
      flex-direction: column;
      gap: variables.$gutter * 2;
      list-style: none;
      margin: 0;
      padding: variables.$gutter * 2;
    }
  }
</style>