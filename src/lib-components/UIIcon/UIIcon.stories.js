import UIIcon from './UIIcon.vue';
import { listSizeX } from 'Shared/sizes';

export default {
  title: 'Components/UIIcon',
  component: UIIcon,
  argTypes: {
    size: {
      options: listSizeX,
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <UIIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'home',
};