<template>
  <fieldset
    :class="['ui-input-radio', 'ui-input-radio--size-' + props.size, { 'ui-input-radio--disabled': props.disabled }]"
    :aria-describedby="idFormHint"
    :aria-required="'true'"
  >
    <UIInputRadioItem
      v-for="option in options"
      :id="idForm"
      :key="option.value"
      :name="props.name"
      :value="option"
      :model-value="props.modelValue"
      :size="props.size"
      :disabled="props.disabled"
      :center="props.center"
      :always-visible="props.alwaysVisible"
      :required="props.required"
      @update:model-value="updateModelValue"
    >
      <slot
        :name="`label-${option.value}`"
        :option="option"
        :value="option.value"
      />
    </UIInputRadioItem>
  </fieldset>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import idGeneratorUtil from '@/shared/utils/idGenerator.util';

import UIInputRadioItem from './UIInputRadioItem.vue';

import type { Size } from '@/shared/types/size.type';
import { InputValueRadio } from '../UIInput.types';

const props = withDefaults(defineProps<{
  id?: string;
  name: string;
  modelValue?: string;
  options?: InputValueRadio[];
  size?: Size;
  disabled?: boolean;
  alwaysVisible?: boolean;
  center?: boolean;
  required?: boolean;
}>(), {
  id: undefined,
  modelValue: '',
  options: () => [] as InputValueRadio[],
  size: 'md',
  center: true,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const idForm = props.id ?? idGeneratorUtil.getId();
const idFormHint = computed(() => idForm + '-hint');

function updateModelValue(value: string): void {
  emit('update:modelValue', value);
}
</script>

<style lang="scss">
.ui-input-radio {
  border: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: variables.$gutter;
}
</style>