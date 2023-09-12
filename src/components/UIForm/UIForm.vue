<script setup lang="ts">
import UIButton from '@/components/UIButton/UIButton.vue';

import type { FormValidators, FormValidator } from './UIForm.types';
import { computed, ref } from 'vue';

const props = withDefaults(defineProps<{
  hideCancel?: boolean;
  validator?: FormValidators;
  showInitErrors?: boolean;
  onSubmit: () => Promise<void>;
}>(), {
  validator: () => ({}) as FormValidators,
  hideCancel: false,
  initWithErrors: false,
});

const emit = defineEmits(['submited']);

const isInitErrors = ref(props.showInitErrors);
const loadingSubmit = ref(false);
const submitErrors = ref<Record<string, string>>({});
const isError = (key: string) => {
  const validator: FormValidator = props.validator[key] || (() => true);
  return isInitErrors.value && (submitErrors.value[key.toString()] !== undefined || true !== validator());
};
const errorText = (key: string) => {
  const result = submitErrors.value[key.toString()];
  if (!result) {
    const validator = (props.validator[key] || (() => true))();
    return typeof validator === 'string' ? validator : undefined;
  }
  return result;
};

const hasErrors = computed(() => isInitErrors.value && Object.values(props.validator).some(validator => (validator as FormValidator)() !== true));

async function submit() {
  const prevErrorsInit = isInitErrors.value;
  isInitErrors.value = true;
  loadingSubmit.value = true;
  try {
    if (!hasErrors.value) {
      submitErrors.value = {};
      await props.onSubmit();
      emit('submited');
    } else if (prevErrorsInit) {
      console.table(Object.keys(props.validator).reduce((acc, key) => {
        const error = errorText(key);
        if (error) acc[key] = error;
        return acc;
      }, {} as Record<string, string>));
    }
  } catch (e) {
    if (!(e instanceof Error)) {
      submitErrors.value = e as Record<string, string>;
    }
  } finally {
    loadingSubmit.value = false;
  }
}
</script>

<template>
  <form
    class="form"
    @submit.prevent="submit"
  >
    <div
      v-if="$slots['content']"
      class="form__content"
    >
      <slot
        name="content"
        :is-error="isError"
        :error-text="errorText"
      />
    </div>
    <div class="form__separator" />
    <div
      class="form__actions"
    >
      <slot
        name="actions"
        :has-errors="hasErrors"
        :loading="loadingSubmit"
      >
        <UIButton
          v-if="!props.hideCancel"
          type="reset"
          text="Cancel"
          color="error"
          theme="outline"
          :disabled="loadingSubmit"
        />
        <UIButton
          type="submit"
          text="Submit"
          color="primary"
          theme="solid"
          :loading="loadingSubmit"
          :disabled="hasErrors"
        />
      </slot>
    </div>
  </form>
</template>