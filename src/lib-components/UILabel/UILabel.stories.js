import UILabel from './UILabel.vue';

export default {
  title: 'Components/UILabel',
  component: UILabel,
};

const Template = (args) => <UILabel {...args} />;

export const _default = Template.bind({});
_default.args = {
  text: 'Testing UILabel',
};

export const green_color = Template.bind({});
green_color.args = {
  text: 'Testing UILabel',
  color: 'green',
};
