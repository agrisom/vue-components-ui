<script setup lang="ts">
import UIIcon from '@/components/UIIcon/UIIcon.vue';

const props = withDefaults(defineProps<{
  text?: string;
  open?: boolean;
  dense?: boolean;
  clipped?: boolean;
}>(), {
  open: false,
  text: '',
});

const emit = defineEmits<{
  (e: 'update:open', open: boolean): void;
}>();

function toggle() {
  emit('update:open', !props.open);
}

function close() {
  emit('update:open', false);
}

defineExpose({
  close,
});
</script>

<template>
  <div :class="['ui-expansible', { 'ui-expansible--dense': props.dense }, { 'ui-expansible--clipped': props.clipped }]">
    <div class="ui-expansible__header">
      <slot name="header" />
      <slot
        name="activator.controller"
        :toggle="toggle"
      >
        <button
          class="ui-expansible__activator"
          type="button"
          :aria-expanded="props.open"
          @click="toggle"
        >
          <div
            v-if="props.text || $slots.activator"
            class="ui-expansible__text"
          >
            <slot name="activator">
              <span>{{ props.text }}</span>
            </slot>
          </div>
          <UIIcon
            v-if="props.open"
            name="chevron-up"
          />
          <UIIcon
            v-else
            name="chevron-down"
          />
        </button>
      </slot>
    </div>
    <div
      v-if="props.open"
      class="ui-expansible__content"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.ui-expansible {
  &__header {
    display: flex;
    gap: variables.$gutter*2;
    align-items: center;
  }

  &__activator {
    @include functions.text--md;
    display: flex;
    gap: variables.$gutter*4;
    align-items: center;
    flex-grow: 1;
    border: 0;
    background-color: transparent;
    padding: variables.$gutter*3;
    text-align: left;
    justify-content: space-between;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    .ui-icon {
      margin-left: auto;
    }
  }

  &__content {
    padding: 0;
  }

  &--clipped {
    .ui-expansible {
      &__activator {
        padding-left: 0;
        padding-right: 0;
      }

      &__content {
        padding-left: 0;
        padding-right: 0;
      }
    }
  }

  &--dense {
    .ui-expansible {
      &__activator {
        padding: 0;
      }

      &__content {
        padding: 0;
      }
    }
  }
}
</style>