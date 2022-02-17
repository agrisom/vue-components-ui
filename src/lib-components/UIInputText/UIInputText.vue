<template>
<div class="input-text">
  <label class="input-text__label" v-if="label" :for="name" :class="[{'sr-only': labelHidden}]">{{ label }}</label>
  <input class="input-text__field" type="text" :id="name" :name="name" :value="modelValue" :placeholder="placeholder" :autocomplete="autocompleteComp" :disabled="disabled" @input="onChangeInput" />
</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'UIInputText',
  props: {
    label: {
      type: String,
      default: undefined,
    },
    name: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: undefined,
    },
    labelHidden: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    autocomplete: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  setup(props, {emit}) {
    const autocompleteComp = computed(() => props.autocomplete ? 'on' : 'off')

    function onChangeInput(event: Event): void {
      const target = event.target as HTMLInputElement;
      emit('update:modelValue', target.value);
    }

    return {
      autocompleteComp,
      onChangeInput,
    };
  },
});
</script>