import UIIcon from './UIIcon.vue';
import { listSizeX } from 'Shared/sizes';
import { iconList } from './mockup/Icon.type';
import sprite from './mockup/sprite-icons.svg';

export default {
  title: 'Components/UIIcon',
  component: UIIcon,
  argTypes: {
    name: {
      options: iconList,
      control: { type: 'select' },
    },
    size: {
      options: listSizeX,
      control: { type: 'select' },
    },
  },
};

const Template = (args) => ({
  components: { UIIcon },
  setup() {
    return { args, sprite };
  },
  template: `
    <div class="svgsprites" style="display: none">
      <iframe :src="sprite" onload="this.before((this.contentDocument.body||this.contentDocument).children[0]);this.remove()"></iframe>
    </div>
    <UIIcon v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  name: 'user',
};

export const SizeExtraSmall = Template.bind({});
SizeExtraSmall.args = {
  name: 'home',
  size: 'xs',
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  name: 'home',
  size: 'sm',
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  name: 'home',
  size: 'md',
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  name: 'home',
  size: 'lg',
};

export const SizeExtraLarge = Template.bind({});
SizeExtraLarge.args = {
  name: 'home',
  size: 'xl',
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  name: 'home',
  width: '10rem',
  height: '10rem',
};