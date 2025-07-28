<template>
  <div :class="['ui-input-select', 'ui-input-select--size-' + props.size, { 'ui-input-select--disabled': props.disabled }]">
    <select
      :id="idForm"
      ref="inputElementRef"
      :value="props.modelValue"
      class="ui-input-select__field"
      :name="props.name"
      :class="[{ 'ui-input-select__field--prepend': props.iconPrepend }, { 'ui-input-select__field--append': props.iconAppend }, { 'ui-input-select__field--placeholder' : placeholder && modelValue === '' }]"
      :aria-describedby="idFormHint"
      :aria-required="props.required"
      :tabindex="props.disabled ? -1 : 0"
      :disabled="props.disabled"
      @input="onChangeInput"
    >
      <slot>
        <option
          v-if="placeholder"
          disabled
          selected
          hidden
          value=""
        >
          {{ props.placeholder }}
        </option>
        <option
          v-if="props.unknownOption"
          value=""
        >
          {{ props.unknownOption }}
        </option>
        <option
          v-for="option in props.options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </slot>
    </select>
    <UIIcon
      v-if="props.iconPrepend"
      class="ui-input-select__icon ui-input-select__icon--prepend"
      :name="props.iconPrepend"
      :size="props.size"
      aria-hidden="true"
    />
    <UIIcon
      v-if="props.iconAppend"
      class="ui-input-select__icon ui-input-select__icon--append"
      :name="props.iconAppend"
      :size="props.size"
      aria-hidden="true"
    />
    <UIIcon
      class="ui-input-select__icon ui-input-select__icon--down"
      name="chevron-down"
      :size="props.size"
      aria-hidden="true"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import idGeneratorUtil from '@/shared/utils/idGenerator.util';

import UIIcon from '@/components/UIIcon/UIIcon.vue';

import type { Size } from '@/shared/types/size.type';
import type { Icon } from '@/shared/types/icon.type';
import { InputValue } from '../UIInput.types';

const props = withDefaults(defineProps<{
  id?: string;
  name: string;
  modelValue?: string;
  placeholder?: string;
  unknownOption?: string;
  options?: InputValue[];
  iconPrepend?: Icon;
  iconAppend?: Icon;
  size?: Size;
  disabled?: boolean;
  required?: boolean;
}>(), {
  id: undefined,
  modelValue: '',
  placeholder: undefined,
  unknownOption: undefined,
  options: () => [] as InputValue[],
  iconPrepend: undefined,
  iconAppend: undefined,
  size: 'md',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value?: string): void;
}>();

const idForm = props.id ?? idGeneratorUtil.getId();
const idFormHint = computed(() => idForm + '-hint');
const inputElementRef = ref<HTMLInputElement>();

function onChangeInput(event: Event): void {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}

function focus() {
  if (inputElementRef.value) inputElementRef.value.focus();
}

defineExpose({
  focus,
});
</script>

<style lang="scss">
.ui-input-select {
  position: relative;
  --ui-input-select-shadow-0: var(--ui-color-grey--60);
  --ui-input-select-shadow-1: var(--ui-color-primary--40);
  --ui-input-select-shadow-2: var(--ui-color-grey--50);
  --ui-input-select-shadow-3: var(--ui-color-primary--30);
  --ui-input-select-padding: #{variables.$gutter*2};
  --ui-input-select-field-icon: #{variables.$gutter*10};
  --ui-input-select-color: var(--ui-input-field-color);
  --ui-input-select-field-background-color: transparent;
  --ui-input-select-icon-color: currentcolor;

  &__field {
    appearance: none;
    border: 0;
    border-radius: 4px;
    box-sizing: border-box;
    box-shadow: inset 0 0 1px 0 var(--ui-input-select-shadow-0), inset 0 0 2px var(--ui-input-select-shadow-2);
    width: 100%;
    padding: var(--ui-input-select-padding);
    padding-right: var(--ui-input-select-field-icon);
    transition: box-shadow 0.15s ease-out;
    color: var(--ui-input-select-color);
    background-color: var(--ui-input-select-field-background-color);

    &:focus,
    &:hover {
      box-shadow: inset 0 0 1px 0 var(--ui-input-select-shadow-1), inset 0 0 2px var(--ui-input-select-shadow-2), 0 0 3px 0 var(--ui-input-select-shadow-3);
      outline: none;

      &~.ui-input-select {
        &__icon {
          color: var(--ui-input-select-shadow-1);
        }
      }
    }

    &--prepend {
      padding-left: var(--ui-input-select-field-icon);
    }

    &--append {
      padding-right: calc(var(--ui-input-select-field-icon) * 2);
    }

    &--placeholder {
      color: var(--ui-color-grey--50);
    }
  }

  &__icon {
    color: var(--ui-input-select-icon-color);
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    transition: color 0.15s ease-out;
    opacity: 0.4;

    &--prepend {
      left: variables.$gutter*2;
    }

    &--append {
      right: variables.$gutter*10;
    }

    &--down {
      right: variables.$gutter*2;
    }
  }

  &--disabled {
    --ui-input-select-shadow-0: var(--ui-color-grey--80);
    --ui-input-select-shadow-1: var(--ui-color-grey--90);
    --ui-input-select-shadow-2: var(--ui-color-grey--80);
    --ui-input-select-shadow-3: var(--ui-color-grey--60);
    --ui-input-select-field-background-color: var(--ui-color-grey--10);

    .ui-input-select {
      &__field {
        pointer-events: none;
      }
    }
  }

  &--size {
    &-sm {
      --ui-input-select-padding: #{variables.$gutter variables.$gutter*2};
      --ui-input-select-field-icon: #{variables.$gutter*8};

      .ui-input-select {
        &__field {
          @include functions.text--sm;
        }
      }
    }

    &-md {
      .ui-input-select {
        &__field {
          @include functions.text--md;
        }
      }
    }

    &-lg {
      --ui-input-select-padding: #{variables.$gutter*3};
      --ui-input-select-icon-left: #{variables.$gutter*3};
      --ui-input-select-field-icon: #{variables.$gutter*15};

      .ui-input-select {
        &__field {
          @include functions.text--lg;
        }
      }
    }
  }
}
</style>