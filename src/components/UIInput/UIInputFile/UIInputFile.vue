<template>
  <div :class="['ui-input-file', 'ui-input-file--size-' + props.size, { 'ui-input-file--disabled': props.disabled }]">
    <input
      :id="idForm"
      ref="inputElementRef"
      type="file"
      class="ui-input-file__field"
      :name="props.name"
      :multiple="props.multiple"
      :accept="acceptFormats"
      :aria-describedby="idFormHint"
      :aria-required="props.required"
      :tabindex="props.disabled ? -1 : 0"
      :disabled="props.disabled"
      hidden
      @input="onChangeInput"
    >
    <div class="ui-input-file__wrapper">
      <label
        v-if="props.multiple || !props.modelValue.length"
        class="ui-input-file__select"
        :for="idForm"
      >
        <div class="ui-input-file__placeholder">{{ (props.multiple && props.modelValue.length > 0) ? props.modelValue.length + ' ' + props.fileUnitText : props.placeholder }}</div>
        <UIButton
          :text="props.multiple ? props.addMultipleText : props.addText"
          theme="solid"
          color="primary"
          :size="props.size"
          :disabled="props.disabled"
          @clicked="openFile"
        />
      </label>
      <template v-if="props.modelValue.length > 0">
        <div
          v-for="file, ind in props.modelValue"
          :key="ind"
          class="ui-input-file__file"
        >
          <div class="ui-input-file__name">
            {{ file.name }}
          </div>
          <div class="ui-input-file__size text--sm">
            {{ fileSize(file) }}
          </div>
          <UIButton
            v-if="!props.disabled"
            icon="trash"
            color="error"
            :size="props.size"
            @clicked="removeFile(ind)"
          />
        </div>
      </template>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { bytesToLocaleString } from '@/shared/utils/number.util';
import idGeneratorUtil from '@/shared/utils/idGenerator.util';

import UIButton from '@/components/UIButton/UIButton.vue';

import type { Size } from '@/shared/types/size.type';

const props = withDefaults(defineProps<{
  id?: string;
  name: string;
  modelValue?: File[];
  accept?: string[];
  placeholder?: string;
  addText?: string;
  addMultipleText?: string;
  fileUnitText?: string;
  size?: Size;
  disabled?: boolean;
  multiple?: boolean;
  required?: boolean;
}>(), {
  id: undefined,
  modelValue: () => [] as File[],
  accept: () => [] as string[],
  placeholder: 'No se ha seleccionado ningun fichero',
  addText: 'Selecciona un fichero',
  addMultipleText: 'Selecciona ficheros',
  fileUnitText: 'ficheros',
  size: 'md',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: File[]): void;
}>();

const idForm = props.id ?? idGeneratorUtil.getId();
const idFormHint = computed(() => idForm + '-hint');
const inputElementRef = ref<HTMLInputElement>();
const acceptFormats = computed(() => props.accept.length > 0 ? props.accept.join(',') : '*');
const fileSize = (file: File) => bytesToLocaleString(file.size);

function onChangeInput(event: Event): void {
  const target = event.target as HTMLInputElement;
  if (target && target.files && target.files[0]) {
    const actualFiles: File[] = [...(props.multiple ? [...props.modelValue] : [])];
    const newFiles: File[] = Array.from(target.files);
    emit('update:modelValue', [...actualFiles, ...newFiles]);
  }
  if (inputElementRef.value) inputElementRef.value.value = '';
}

function openFile() {
  inputElementRef.value?.click();
}

function removeFile(ind: number) {
  const files = [...props.modelValue];
  files.splice(ind, 1);
  emit('update:modelValue', files);
  if (inputElementRef.value) inputElementRef.value.value = '';
}

function focus() {
  if (inputElementRef.value) inputElementRef.value.focus();
}

defineExpose({
  focus,
});
</script>

<style lang="scss">
.ui-input-file {
  &__select {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & + .ui-input-file__file {
      margin-top: variables.$gutter*2;
    }
  }

  &__placeholder {
    font-style: italic;
  }

  &__file {
    display: flex;
    align-items: center;
    gap: variables.$gutter*2;
    margin-top: variables.$gutter;
  }

  &__name {
    flex-grow: 1;
  }

  &--size {
    &-sm {
      @include functions.text--sm;
    }

    &-md {
      @include functions.text--md;
    }

    &-lg {
      @include functions.text--lg;
    }
  }
}
</style>