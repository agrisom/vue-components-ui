<template lang="pug">
.input-text
  label.input-text__label(v-if="props.label" :for="props.name" :class="[{'sr-only': props.labelHidden}]") {{ props.label }}
  input.input-text__field(type="text" :id="props.name" :name="props.name" :value="props.modelValue" :placeholder="props.placeholder" :autocomplete="autocompleteComp" :disabled="props.disabled" @input="onChangeInput")
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  label?: string;
  name?: string;
  modelValue?: string;
  placeholder?: string;
  labelHidden?: boolean;
  disabled?: boolean;
  autocomplete?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  label: undefined,
  name: '',
  modelValue: '',
  placeholder: undefined,
  labelHidden: false,
  disabled: false,
  autocomplete: true,
});
const emit = defineEmits(['update:modelValue']);
const autocompleteComp = ref(props.autocomplete ? 'on' : 'off');

function onChangeInput(event: Event): void {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}
</script>