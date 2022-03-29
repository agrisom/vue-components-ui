import { reactive } from 'vue';
import UILabel from './UILabel.vue';
import '@/shared/style/lib-components.scss';

export default {
  title: 'Components (DEV)/UILabel',
  component: UILabel,
};

const Template = (args) => ({
  components: { UILabel },
  setup() {
    return { args: reactive(args) };
  },
  template: '<UILabel v-bind="args" v-model:color="args.color"/>',
});

export const Default = Template.bind({});
Default.args = {
  text: 'Testing UILabel',
  color: undefined,
};

export const GreenColor = Template.bind({});
GreenColor.args = {
  ...Default.args,
  text: 'Testing UILabel',
  color: 'green',
};
