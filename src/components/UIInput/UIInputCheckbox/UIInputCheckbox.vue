<template>
  <div
    :class="['ui-input-checkbox', 'ui-input-checkbox--size-' + props.size, { 'ui-input-checkbox--center': props.center }, { 'ui-input-checkbox--checked': props.modelValue === true }, { 'ui-input-checkbox--focus': isFocus }, { 'ui-input-checkbox--disabled': props.disabled }, { 'ui-input-checkbox--visible': props.alwaysVisible }, { 'ui-input-checkbox--indeterminate': props.indeterminate }]"
  >
    <input
      :id="idForm"
      ref="inputElementRef"
      :checked="props.modelValue"
      type="checkbox"
      class="ui-input-checkbox__field"
      :name="props.name"
      :aria-describedby="idFormHint"
      :aria-required="props.required"
      :tabindex="props.disabled ? -1 : 0"
      :disabled="props.disabled"
      @change="onChange"
    >
    <label
      class="ui-input-checkbox__label"
      :for="idForm"
    >
      <div class="ui-input-checkbox__icon-wrapper">
        <UIIcon
          class="ui-input-checkbox__icon"
          :name="props.indeterminate ? 'minus' : props.icon"
          :size="props.size"
          aria-hidden="true"
        />
      </div>
      <div class="ui-input-checkbox__content">
        <slot :label="props.label">
          <span>{{ props.label }}</span>
        </slot>
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { debounce } from '@/shared/utils/debounce.util';
import idGeneratorUtil from '@/shared/utils/idGenerator.util';

import UIIcon from '@/components/UIIcon/UIIcon.vue';

import type { Size } from '@/shared/types/size.type';
import type { Icon } from '@/shared/types/icon.type';

const props = withDefaults(defineProps<{
  id?: string;
  name: string;
  modelValue?: boolean;
  label?: string;
  icon?: Icon;
  size?: Size;
  disabled?: boolean;
  indeterminate?: boolean;
  alwaysVisible?: boolean;
  center?: boolean;
  required?: boolean;
}>(), {
  id: undefined,
  modelValue: false,
  label: '',
  icon: 'check',
  size: 'md',
  center: true,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'update:indeterminate', value: boolean): void;
}>();

const idForm = props.id ?? idGeneratorUtil.getId();
const idFormHint = computed(() => idForm + '-hint');
const inputElementRef = ref<HTMLInputElement>();
const isFocus = ref(false);

function onChange(event: Event): void {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.checked);
  if (props.indeterminate) emit('update:indeterminate', false);
}

const checkFocus = debounce(setIsFocus, 1);
function setIsFocus(event: Event) {
  isFocus.value = (event.target as HTMLElement).id === idForm;
}

function focus() {
  if (inputElementRef.value) inputElementRef.value.focus();
}

onMounted(() => {
  document.addEventListener('focusin', checkFocus);
  document.addEventListener('focusout', () => isFocus.value = false);
});

onBeforeUnmount(() => {
  document.removeEventListener('focusin', checkFocus);
  document.removeEventListener('focusout', () => isFocus.value = false);
});

defineExpose({
  focus,
});
</script>

<style lang="scss">
.ui-input-checkbox {
  position: relative;
  --ui-input-checkbox-shadow-0: var(--ui-color-grey--60);
  --ui-input-checkbox-shadow-1: var(--ui-color-primary--40);
  --ui-input-checkbox-shadow-2: var(--ui-color-grey--50);
  --ui-input-checkbox-shadow-3: var(--ui-color-primary--30);
  --ui-input-checkbox-color: var(--ui-input-field-color, currentcolor);
  --ui-input-checkbox-field-background-color: transparent;
  --ui-input-checkbox-icon-color: currentcolor;
  --ui-input-checkbox-icon-size: #{variables.$gutter*6};
  --ui-input-checkbox-box-shadow: inset 0 0 1px 0 var(--ui-input-checkbox-shadow-0), inset 0 0 2px var(--ui-input-checkbox-shadow-2);
  --ui-input-checkbox-outline: none;

  &__label {
    color: var(--ui-input-checkbox-color);
    display: block;
    transition: color 0.15s ease-out;
    flex: 0 1 auto;
    cursor: pointer;
    display: flex;
    gap: variables.$gutter*2;
  }

  &__content {
    display: flex;
    flex-direction: column;
    color: var(--ui-input-checkbox-color);
  }

  &__field {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    margin: 0;
    opacity: 0;
    cursor: pointer;
  }

  &__icon {
    color: var(--ui-input-checkbox-icon-color);
    transition: transform 0.1s ease-out;
    transform: scale(0);

    &-wrapper {
      pointer-events: none;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: variables.$gutter;
      height: var(--ui-input-checkbox-icon-size);
      width: var(--ui-input-checkbox-icon-size);
      background-color: var(--ui-input-checkbox-field-background-color);
      box-shadow: var(--ui-input-checkbox-box-shadow);
      outline: var(--ui-input-checkbox-outline);
    }
  }

  &:hover {
    .ui-input-checkbox__icon-wrapper {
      --ui-input-checkbox-box-shadow: inset 0 0 1px 0 var(--ui-input-checkbox-shadow-1), inset 0 0 2px var(--ui-input-checkbox-shadow-2), 0 0 3px 0 var(--ui-input-checkbox-shadow-3);

      .ui-icon {
        color: var(--ui-input-checkbox-icon-color);
      }
    }
  }

  &--size {
    &-sm {
      --ui-input-checkbox-icon-size: #{variables.$gutter*4};

      .ui-input-checkbox {
        &__label {
          @include functions.text--sm;
        }
      }
    }

    &-md {
      --ui-input-checkbox-icon-size: #{variables.$gutter*6};

      .ui-input-checkbox {
        &__label {
          @include functions.text--md;
        }
      }
    }

    &-lg {
      --ui-input-checkbox-icon-size: #{variables.$gutter*8};

      .ui-input-checkbox {
        &__label {
          @include functions.text--lg;
        }
      }
    }
  }

  &--center {
    .ui-input-checkbox {
      display: flex;
      align-items: center;

      &__label {
        display: flex;
        align-items: center;
      }
    }
  }

  &--visible {
    --ui-input-checkbox-icon-color: var(--ui-color-grey--80);

    .ui-input-checkbox__icon {
      transition: transform 0.1s ease-out 0.15s;
      transform: scale(0.7);
    }
  }

  &--checked,
  &--indeterminate {
    --ui-input-checkbox-field-background-color: var(--ui-input-checkbox-shadow-1);
    --ui-input-checkbox-icon-color: var(--ui-color-white);
    --ui-input-checkbox-box-shadow: inset 0 0 1px 20px var(--ui-input-checkbox-shadow-1), inset 0 0 2px var(--ui-input-checkbox-shadow-2);

    .ui-input-checkbox__icon-wrapper {
      transition: box-shadow 0.15s ease-out;
    }

    .ui-input-checkbox__icon {
      transition: transform 0.1s ease-out 0.15s;
      transform: scale(0.7);
    }
  }

  &--disabled {
    --ui-input-checkbox-field-background-color: var(--ui-color-grey--10);
    pointer-events: none;
  }

  &--checked.ui-input-checkbox--disabled {
    --ui-input-checkbox-box-shadow: inset 0 0 1px 20px var(--ui-color-grey--50), inset 0 0 2px var(--ui-color-grey--70);
  }

  &--indeterminate.ui-input-checkbox--disabled {
    --ui-input-checkbox-box-shadow: inset 0 0 1px 20px var(--ui-color-grey--50), inset 0 0 2px var(--ui-color-grey--70);
  }

  &--focus {
    --ui-input-checkbox-outline: -webkit-focus-ring-color auto 1px;
  }
}
</style>