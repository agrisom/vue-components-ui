import { reactive } from 'vue';
import UILabel from './UILabel.vue';

export default {
  title: 'Components/UILabel',
  component: UILabel,
};

const Template = (args) => ({
  components: { UILabel },
  setup() {
    return { args: reactive(args) };
  },
  template: '<UILabel v-bind="args" v-model:color="args.color"/>',
});

export const _default = Template.bind({});
_default.args = {
  text: 'Testing UILabel',
};

export const green_color = Template.bind({});
green_color.args = {
  text: 'Testing UILabel',
  color: 'green',
};
