import UIInputText from './UIInputText.vue';

export default {
  title: 'Components/Forms/UIInputText',
  component: UIInputText,
};

const Template = (args) => <UIInputText {...args} />;

export const defaultView = Template.bind({});
defaultView.args = {
  modelValue: '',
  placeholder: 'Placeholder text',
};
