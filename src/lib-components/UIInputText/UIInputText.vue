<template>
<div :class="['input-text', {'input-text--block': props.block}]">
  <label v-if="props.label" :for="props.name" :class="['input-text__label', {'sr-only': props.labelHidden || 'hidden' === props.type}]">{{ props.label + (required ? ' *' : '') }}</label>
  <input class="input-text__field" :type="props.type"
    :id="props.name"
    :name="props.name"
    :value="props.modelValue"
    :placeholder="props.placeholder"
    :autocomplete="props.autocomplete"
    :disabled="props.disabled"
    :required="props.required"
    :invalid="true"
    @input="onChangeInput" />
</div>
</template>

<script setup lang="ts">
import type UIInputTextType from './UIInputTextType';
import type UIInputTextEnterKeyHint from './UIInputTextEnterKeyHint';
import type UIInputTextAutocomplete from './UIInputTextAutocomplete';

interface Props {
  type: UIInputTextType;
  name: string;
  label?: string;
  modelValue?: string;
  placeholder?: string;
  autocomplete?: UIInputTextAutocomplete;
  enterKeyHint?: UIInputTextEnterKeyHint;
  labelHidden?: boolean;
  disabled?: boolean;
  required?: boolean;
  block?: boolean;
}

const props: Readonly<Props> = withDefaults(defineProps<Props>(), {
  modelValue: '',
  autocomplete: 'off',
});
const emit = defineEmits(['update:modelValue']);

function onChangeInput(event: Event): void {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}
</script>

<style lang="scss">
.input-text {
  position: relative;
  &__label {
    font-weight: 600;
    line-height: 1.75rem;
  }
  &__field {
    display: block;
    &:disabled {
      opacity: 0.7;
    }
    &:required {
      color: darkorange;
    }
    &:invalid {
      color: red;
    }
  }
  &--block {
    width: 100%;
    .input-text__field {
      width: 100%;
    }
  }
}
.sr-only {
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  margin: -1px;
  clip-path: polygon(0 0, 0 0, 0 0);
}
</style>