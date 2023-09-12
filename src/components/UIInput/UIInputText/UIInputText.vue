<template>
  <div :class="['ui-input-text', 'ui-input-text--size-' + props.size, { 'ui-input-text--disabled': props.disabled }]">
    <input
      :id="idForm"
      ref="inputElementRef"
      :value="props.modelValue"
      type="text"
      class="ui-input-text__field"
      :name="props.name"
      :class="[{ 'ui-input-text__field--prepend': props.iconPrepend }, { 'ui-input-text__field--append': props.iconAppend }]"
      :aria-describedby="idFormHint"
      :aria-required="props.required"
      :placeholder="props.placeholder"
      :autocomplete="autocompleteTxt"
      :tabindex="props.disabled ? -1 : 0"
      :disabled="props.disabled"
      :list="props.list"
      @input="onChangeInput"
    >
    <UIIcon
      v-if="props.iconPrepend"
      class="ui-input-text__icon ui-input-text__icon--prepend"
      :name="props.iconPrepend"
      :size="props.size"
      aria-hidden="true"
    />
    <UIIcon
      v-if="props.iconAppend"
      class="ui-input-text__icon ui-input-text__icon--append"
      :name="props.iconAppend"
      :size="props.size"
      aria-hidden="true"
    />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import idGeneratorUtil from '@/shared/utils/idGenerator.util';

import UIIcon from '@/components/UIIcon/UIIcon.vue';

import type { Size } from '@/shared/types/size.type';
import type { Icon } from '@/shared/types/icon.type';

const props = withDefaults(defineProps<{
  id?: string;
  name?: string;
  modelValue?: string;
  placeholder?: string;
  list?: string;
  iconPrepend?: Icon;
  iconAppend?: Icon;
  size?: Size;
  disabled?: boolean;
  autocomplete?: boolean;
  required?: boolean;
}>(), {
  id: undefined,
  name: undefined,
  modelValue: '',
  placeholder: undefined,
  list: undefined,
  iconPrepend: undefined,
  iconAppend: undefined,
  size: 'md',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value?: string): void;
}>();

const idForm = props.id ?? idGeneratorUtil.getId();
const autocompleteTxt = computed(() => props.autocomplete ? 'on' : 'off');
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
.ui-input-text {
  position: relative;
  --ui-input-text-shadow-0: var(--ui-color-grey--60);
  --ui-input-text-shadow-1: var(--ui-color-primary--40);
  --ui-input-text-shadow-2: var(--ui-color-grey--50);
  --ui-input-text-shadow-3: var(--ui-color-primary--30);
  --ui-input-text-padding: #{variables.$gutter*2};
  --ui-input-text-field-icon: #{variables.$gutter*10};
  --ui-input-text-color: var(--ui-input-field-color);
  --ui-input-text-field-background-color: transparent;
  --ui-input-text-icon-color: currentcolor;

  &__field {
    appearance: none;
    border: 0;
    border-radius: 4px;
    box-sizing: border-box;
    box-shadow: inset 0 0 1px 0 var(--ui-input-text-shadow-0), inset 0 0 2px var(--ui-input-text-shadow-2);
    width: 100%;
    padding: var(--ui-input-text-padding);
    transition: box-shadow 0.15s ease-out;
    color: var(--ui-input-text-color);
    background-color: var(--ui-input-text-field-background-color);

    &:focus,
    &:hover {
      box-shadow: inset 0 0 1px 0 var(--ui-input-text-shadow-1), inset 0 0 2px var(--ui-input-text-shadow-2), 0 0 3px 0 var(--ui-input-text-shadow-3);
      outline: none;

      &~.ui-input-text {
        &__icon {
          color: var(--ui-input-text-shadow-1);
        }
      }
    }

    &--prepend {
      padding-left: var(--ui-input-text-field-icon);
    }

    &--append {
      padding-right: var(--ui-input-text-field-icon);
    }
  }

  &__icon {
    color: var(--ui-input-text-icon-color);
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
      right: variables.$gutter*2;
    }
  }

  &--disabled {
    --ui-input-text-shadow-0: var(--ui-color-grey--80);
    --ui-input-text-shadow-1: var(--ui-color-grey--90);
    --ui-input-text-shadow-2: var(--ui-color-grey--80);
    --ui-input-text-shadow-3: var(--ui-color-grey--60);
    --ui-input-text-field-background-color: var(--ui-color-grey--10);

    .ui-input-text {
      &__field {
        pointer-events: none;
      }
    }
  }

  &--size {
    &-sm {
      --ui-input-text-padding: #{variables.$gutter variables.$gutter*2};
      --ui-input-text-field-icon: #{variables.$gutter*8};

      .ui-input-text {
        &__field {
          @include functions.text--sm;
        }
      }
    }

    &-md {
      .ui-input-text {
        &__field {
          @include functions.text--md;
        }
      }
    }

    &-lg {
      --ui-input-text-padding: #{variables.$gutter*3};
      --ui-input-text-icon-left: #{variables.$gutter*3};
      --ui-input-text-field-icon: #{variables.$gutter*15};

      .ui-input-text {
        &__field {
          @include functions.text--lg;
        }
      }
    }
  }
}
</style>