<template>
  <div :class="['ui-input-field', {'ui-input-field--success': props.success}, {'ui-input-field--error': props.error}]">
    <label
      v-if="props.label"
      :for="idForm"
      class="ui-input-field__label"
      :class="[{ 'sr-only': props.labelHidden }]"
    >{{
       props.label }}
      <template v-if="props.required">
        <span
          class="ui-input-field__asterisk"
          aria-hidden="true"
        >*</span>
        <span class="sr-only">required</span>
      </template>
    </label>
    <div class="ui-input-field__wrapper">
      <slot :id="idForm" />
    </div>
    <small
      v-if="props.error && props.errorText"
      :id="idFormHint"
      class="ui-input-field__error"
    >{{ props.errorText }}</small>
    <small
      v-else-if="props.hintText"
      :id="idFormHint"
      class="ui-input-field__hint"
    >{{ props.hintText }}</small>
  </div>
</template>

<script setup lang="ts">
import idGeneratorUtil from '@/shared/utils/idGenerator.util';
import { computed } from 'vue';

const props = defineProps<{
  label?: string;
  labelHidden?: boolean;
  required?: boolean;
  success?: boolean;
  error?: boolean;
  errorText?: string;
  hintText?: string;
}>();

const idForm = idGeneratorUtil.getId();
const idFormHint = computed(() => idForm + '-hint');
</script>

<style lang="scss">
.ui-input-field {
  --ui-input-field-margin: #{variables.$gutter};
  color: var(--ui-input-field-color);

  &__label {
    font-weight: 600;
    display: block;
    margin-bottom: var(--ui-input-field-margin);
    transition: color 0.15s ease-out;
  }

  &__asterisk {
    margin-left: var(--ui-input-field-margin);
    color: red;
  }

  &__wrapper {
    position: relative;
  }

  &__hint, &__error {
    display: block;
    margin-top: var(--ui-input-field-margin);
  }

  &--success {
    --ui-input-field-color: var(--ui-color-success--40);
  }

  &--error {
    --ui-input-field-color: var(--ui-color-error--30);
  }
}
</style>