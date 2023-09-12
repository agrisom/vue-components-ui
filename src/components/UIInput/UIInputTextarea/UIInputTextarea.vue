<template>
  <div :class="['ui-input-textarea', 'ui-input-textarea--size-' + props.size, { 'ui-input-textarea--disabled': props.disabled }]">
    <textarea
      :id="idForm"
      ref="inputElementRef"
      :value="props.modelValue"
      type="text"
      class="ui-input-textarea__field"
      :name="props.name"
      :aria-describedby="idFormHint"
      :aria-required="props.required"
      :placeholder="props.placeholder"
      :tabindex="props.disabled ? -1 : 0"
      :disabled="props.disabled"
      @input="onChangeInput"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import idGeneratorUtil from '@/shared/utils/idGenerator.util';

import type { Size } from '@/shared/types/size.type';

const props = withDefaults(defineProps<{
  id?: string;
  name?: string;
  modelValue?: string;
  placeholder?: string;
  size?: Size;
  disabled?: boolean;
  required?: boolean;
}>(), {
  id: undefined,
  name: undefined,
  modelValue: '',
  placeholder: undefined,
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
  inputElementRef.value && inputElementRef.value.focus();
}

defineExpose({
  focus,
});
</script>

<style lang="scss">
.ui-input-textarea {
  position: relative;
  --ui-input-textarea-shadow-0: var(--ui-color-grey--60);
  --ui-input-textarea-shadow-1: var(--ui-color-primary--40);
  --ui-input-textarea-shadow-2: var(--ui-color-grey--50);
  --ui-input-textarea-shadow-3: var(--ui-color-primary--30);
  --ui-input-textarea-padding: #{variables.$gutter*2};
  --ui-input-textarea-color: var(--ui-input-field-color);
  --ui-input-textarea-field-background-color: transparent;

  &__field {
    appearance: none;
    border: 0;
    border-radius: 4px;
    box-sizing: border-box;
    box-shadow: inset 0 0 1px 0 var(--ui-input-textarea-shadow-0), inset 0 0 2px var(--ui-input-textarea-shadow-2);
    width: 100%;
    padding: var(--ui-input-textarea-padding);
    transition: box-shadow 0.15s ease-out;
    color: var(--ui-input-textarea-color);
    background-color: var(--ui-input-textarea-field-background-color);

    &:focus,
    &:hover {
      box-shadow: inset 0 0 1px 0 var(--ui-input-textarea-shadow-1), inset 0 0 2px var(--ui-input-textarea-shadow-2), 0 0 3px 0 var(--ui-input-textarea-shadow-3);
      outline: none;
    }
  }

  &--disabled {
    --ui-input-textarea-shadow-0: var(--ui-color-grey--80);
    --ui-input-textarea-shadow-1: var(--ui-color-grey--90);
    --ui-input-textarea-shadow-2: var(--ui-color-grey--80);
    --ui-input-textarea-shadow-3: var(--ui-color-grey--60);
    --ui-input-textarea-field-background-color: var(--ui-color-grey--10);

    .ui-input-textarea {
      &__field {
        pointer-events: none;
      }
    }
  }

  &--size {
    &-sm {
      --ui-input-textarea-padding: #{variables.$gutter variables.$gutter*2};

      .ui-input-textarea {
        &__field {
          @include functions.text--sm;
        }
      }
    }

    &-md {
      .ui-input-textarea {
        &__field {
          @include functions.text--md;
        }
      }
    }

    &-lg {
      --ui-input-textarea-padding: #{variables.$gutter*3};

      .ui-input-textarea {
        &__field {
          @include functions.text--lg;
        }
      }
    }
  }
}
</style>