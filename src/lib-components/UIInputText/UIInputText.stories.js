import UIInputText from './UIInputText.vue';

export default {
  title: 'Components/Forms/UIInputText',
  component: UIInputText,
};

const Template = (args) => <UIInputText {...args} />;

export const _default = Template.bind({});
_default.args = {
  modelValue: '',
  placeholder: 'Placeholder text',
};

export const disabled = Template.bind({});
disabled.args = {
  modelValue: '',
  placeholder: 'Placeholder text',
  disabled: true,
};
