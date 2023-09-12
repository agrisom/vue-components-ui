<script setup lang="ts">
import { ref } from 'vue';

import { AlertUtil, UIButton, UIInputCheckbox } from '@/LibraryDeclaration';
import UIInputField from '@/components/UIInput/UIInputField/UIInputField.vue';
import UIInputText from '@/components/UIInput/UIInputText/UIInputText.vue';
import UIForm from './UIForm.vue';

import { type FormValidators } from './UIForm.types';

const myObject = ref(initMyObject());

function initMyObject() {
  return {
    field1: 'Not ok',
    field2: 'any text',
    field3: 'ok',
    field4: 'ok',
  };
}

const externalParam = ref(false);

const mockValidator: FormValidators = {
  'field1': () => (!externalParam.value || myObject.value.field1 === 'ok') || 'Value must be "ok"',
  'field3': () => myObject.value.field1 !== myObject.value.field3 || 'field3 must be diferent of field1',
  'field4': field4CustomValidator,
};

function field4CustomValidator() {
  if (myObject.value.field4 === myObject.value.field3) return 'field4 must be diferent of field3';
  if (!myObject.value.field4) return 'field4 not empty';
  if (isNaN(+myObject.value.field4)) return 'field4 must be a number';
  return true;
}

async function submit() {
  console.log('comp submit');
  await new Promise(resolve => setTimeout(resolve, 1000));
  // simular error
  const submitErrors = {} as Record<string, string>;
  if (myObject.value.field3 === 'ko') {
    submitErrors['back3'] = 'Value can\'t be "ko"';
    throw (submitErrors);
  }
  if (myObject.value.field3 === '') {
    AlertUtil.error('Error 500', '[field3] - Value required');
    throw Error('text');
  }
}

function onSumbited() {
  AlertUtil.success('Submited OK', JSON.stringify(myObject.value));
}
</script>

<template>
  <UIForm
    :validator="mockValidator"
    :on-submit="submit"
    show-init-errors
    @submited="onSumbited"
  >
    <template #content="{ isError, errorText }">
      <UIInputCheckbox
        v-model:model-value="externalParam"
        label="Check field1"
        name="field1"
      />
      <div class="form__separator" />
      <UIInputField
        label="field1"
        :error="isError('field1')"
        :error-text="errorText('field1')"
      >
        <template #default="{id}">
          <UIInputText
            :id="id"
            v-model:model-value="myObject.field1"
            name="field1"
          />
        </template>
      </UIInputField>
      <UIInputField
        label="field2"
        :error="isError('field2')"
        :error-text="errorText('field2')"
        hint-text="Value with no validation"
      >
        <template #default="{id}">
          <UIInputText
            :id="id"
            v-model:model-value="myObject.field2"
            name="field2"
          />
        </template>
      </UIInputField>
      <UIInputField
        label="field3"
        :error="isError('field3') || isError('back3')"
        :error-text="errorText('field3') || errorText('back3')"
      >
        <template #default="{id}">
          <UIInputText
            :id="id"
            v-model:model-value="myObject.field3"
            name="field3"
          />
        </template>
      </UIInputField>
      <UIInputField
        label="field4"
        :error="isError('field4')"
        :error-text="errorText('field4')"
        hint-text="Value is number and diferent to field3"
      >
        <template #default="{id}">
          <UIInputText
            :id="id"
            v-model:model-value="myObject.field4"
            name="field4"
          />
        </template>
      </UIInputField>
    </template>
    <template #actions="{ hasErrors, loading }">
      <UIButton
        text="Reset"
        theme="outline"
        :loading="loading"
        @clicked="myObject = initMyObject(); externalParam = false"
      />
      <UIButton
        type="submit"
        text="Save"
        color="primary"
        theme="solid"
        :loading="loading"
        :disabled="hasErrors"
      />
    </template>
  </UIForm>
</template>