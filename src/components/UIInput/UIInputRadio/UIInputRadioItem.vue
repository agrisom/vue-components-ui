<template>
  <div :class="['ui-input-radio-item', 'ui-input-radio-item--size-' + props.size, { 'ui-input-radio-item--center': props.center }, { 'ui-input-radio-item--checked': checked }, { 'ui-input-radio-item--focus': isFocus }, { 'ui-input-radio-item--visible': props.alwaysVisible }, { 'ui-input-radio-item--disabled': props.disabled || props.value.disabled }]">
    <input
      :id="formId"
      ref="inputElementRef"
      type="radio"
      :name="props.name"
      :value="props.value.value"
      :checked="checked"
      class="ui-input-radio-item__field"
      :tabindex="(props.disabled || props.value.disabled) ? -1 : 0"
      :disabled="props.disabled || props.value.disabled"
      :required="props.required"
      @change="onChangeInput"
    >
    <label
      class="ui-input-radio-item__label"
      :for="props.value.value"
    >
      <div class="ui-input-radio-item__icon-wrapper">
        <UIIcon
          class="ui-input-radio-item__icon"
          :name="props.value.icon ?? 'circle'"
          :size="props.size"
          aria-hidden="true"
        />
      </div>
      <div class="ui-input-radio-item__content">
        <slot :label="props.value.text">
          <span>{{ props.value.text }}</span>
        </slot>
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { debounce } from '@/shared/utils/debounce.util';

import UIIcon from '@/components/UIIcon/UIIcon.vue';

import type { Size } from '@/shared/types/size.type';
import type { InputValueRadio } from '../UIInput.types';

const props = defineProps<{
  id: string;
  name: string;
  value: InputValueRadio;
  modelValue?: string;
  size: Size;
  disabled: boolean;
  center: boolean;
  alwaysVisible: boolean;
  required: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const formId = `${props.id}-${props.value.value}`;
const inputElementRef = ref<HTMLInputElement>();
const isFocus = ref(false);
const checked = computed(() => props.modelValue === props.value.value);

function onChangeInput(): void {
  emit('update:modelValue', props.value.value);
}

const checkFocus = debounce(setIsFocus, 1);
function setIsFocus(event: Event) {
  isFocus.value = (event.target as HTMLElement).id === formId;
}

function focus() {
  if (inputElementRef.value) inputElementRef.value.focus();
}

onMounted(() => {
  document.addEventListener('focusin', checkFocus);
  document.addEventListener('focusout', () => isFocus.value = false);
});

onBeforeUnmount(() => {
  document.removeEventListener('focusin', checkFocus);
  document.removeEventListener('focusout', () => isFocus.value = false);
});

defineExpose({
  focus,
});
</script>

<style lang="scss">
.ui-input-radio-item {
  position: relative;
  --ui-input-radio-item-shadow-0: var(--ui-color-grey--60);
  --ui-input-radio-item-shadow-1: var(--ui-color-primary--40);
  --ui-input-radio-item-shadow-2: var(--ui-color-grey--50);
  --ui-input-radio-item-shadow-3: var(--ui-color-primary--30);
  --ui-input-radio-item-color: var(--ui-input-field-color, currentcolor);
  --ui-input-radio-item-field-background-color: transparent;
  --ui-input-radio-item-icon-color: currentcolor;
  --ui-input-radio-item-icon-size: #{variables.$gutter*6};
  --ui-input-radio-item-box-shadow: inset 0 0 1px 0 var(--ui-input-radio-item-shadow-0), inset 0 0 2px var(--ui-input-radio-item-shadow-2);
  --ui-input-radio-item-outline: none;

  &__label {
    color: var(--ui-input-radio-item-color);
    display: block;
    transition: color 0.15s ease-out;
    flex: 0 1 auto;
    cursor: pointer;
    display: flex;
    gap: variables.$gutter*2;
  }

  &__content {
    display: flex;
    flex-direction: column;
    color: var(--ui-input-radio-item-color);
  }

  &__field {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    margin: 0;
    opacity: 0;
    cursor: pointer;
  }

  &__icon {
    color: var(--ui-input-radio-item-icon-color);
    transition: transform 0.1s ease-out;
    transform: scale(0);

    &-wrapper {
      pointer-events: none;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      height: var(--ui-input-radio-item-icon-size);
      width: var(--ui-input-radio-item-icon-size);
      background-color: var(--ui-input-radio-item-field-background-color);
      box-shadow: var(--ui-input-radio-item-box-shadow);
      outline: var(--ui-input-radio-item-outline);
    }
  }

  &:hover {
    .ui-input-radio-item__icon-wrapper {
      --ui-input-radio-item-box-shadow: inset 0 0 1px 0 var(--ui-input-radio-item-shadow-1), inset 0 0 2px var(--ui-input-radio-item-shadow-2), 0 0 3px 0 var(--ui-input-radio-item-shadow-3);

      .ui-icon {
        color: var(--ui-input-radio-item-icon-color);
      }
    }
  }

  &--size {
    &-sm {
      --ui-input-radio-item-icon-size: #{variables.$gutter*4};

      .ui-input-radio-item {
        &__label {
          @include functions.text--sm;
        }
      }
    }

    &-md {
      --ui-input-radio-item-icon-size: #{variables.$gutter*6};

      .ui-input-radio-item {
        &__label {
          @include functions.text--md;
        }
      }
    }

    &-lg {
      --ui-input-radio-item-icon-size: #{variables.$gutter*8};

      .ui-input-radio-item {
        &__label {
          @include functions.text--lg;
        }
      }
    }
  }

  &--center {
    .ui-input-radio-item {
      display: flex;
      align-items: center;

      &__label {
        display: flex;
        align-items: center;
      }
    }
  }

  &--visible {
    --ui-input-radio-item-icon-color: var(--ui-color-grey--80);

    .ui-input-radio-item__icon {
      transition: transform 0.1s ease-out 0.15s;
      transform: scale(0.5);
    }
  }

  &--checked {
    --ui-input-radio-item-field-background-color: var(--ui-input-radio-item-shadow-1);
    --ui-input-radio-item-icon-color: var(--ui-color-white);
    --ui-input-radio-item-box-shadow: inset 0 0 1px 20px var(--ui-input-radio-item-shadow-1), inset 0 0 2px var(--ui-input-radio-item-shadow-2);

    .ui-input-radio-item__icon-wrapper {
      transition: box-shadow 0.15s ease-out;
    }

    .ui-input-radio-item__icon {
      transition: transform 0.1s ease-out 0.15s;
      transform: scale(0.5);
    }
  }

  &--disabled {
    --ui-input-radio-item-field-background-color: var(--ui-color-grey--10);
    pointer-events: none;
  }

  &--checked.ui-input-radio-item--disabled {
    --ui-input-radio-item-box-shadow: inset 0 0 1px 20px var(--ui-color-grey--50), inset 0 0 2px var(--ui-color-grey--70);
  }

  &--focus {
    --ui-input-radio-item-outline: -webkit-focus-ring-color auto 1px;
  }
}
</style>