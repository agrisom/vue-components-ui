import { reactive } from 'vue';
import UIInputText from './UIInputText.vue';

export default {
  title: 'Components (test)/Forms/UIInputText',
  component: UIInputText,
};

const Template = (args) => ({
  components: { UIInputText },
  setup() {
    return { args: reactive(args) };
  },
  template: '<UIInputText v-bind="args" v-model="args.modelValue" />',
});

export const Default = Template.bind({});
Default.args = {
  modelValue: '',
  label: 'Label text',
  placeholder: 'Placeholder',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
