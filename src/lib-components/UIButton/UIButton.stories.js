import UIButton from './UIButton.vue';
import { listSize, listSizeX } from 'Shared/sizes';
import { iconList } from '@/lib-components/UIIcon/mockup/Icon.type';
import sprite from '@/lib-components/UIIcon/mockup/sprite-icons.svg';

export default {
  title: 'Components (DEV)/UIButton',
  component: UIButton,
  argTypes: {
    icon: {
      options: [ undefined, ...iconList ],
      control: { type: 'select' },
    },
    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'select' },
    },
    theme: {
      options: ['solid', 'outline', 'transparent', 'text'],
      control: { type: 'select' },
    },
    size: {
      options: listSize,
      control: { type: 'select' },
    },
    iconSize: {
      options: [ undefined, ...listSizeX ],
      control: { type: 'select' },
    },
    align: {
      options: ['left', 'center', 'right', 'space-between'],
      control: { type: 'select' },
    },
  },
};

// const Template = (args) => ({
//   components: { UIButton },
//   setup() {
//     return { args, sprite };
//   },
//   template: `
//     <div class="svgsprites" style="display: none">
//       <iframe :src="sprite" onload="this.before((this.contentDocument.body||this.contentDocument).children[0]);this.remove()"></iframe>
//     </div>
//     <UIButton v-bind="args" />
//   `,
// });

const Template = (args) => ({
  components: { UIButton },
  setup() {
    return { args, sprite };
  },
  template: `
    <div class="svgsprites" style="display: none">
      <iframe :src="sprite" onload="this.before((this.contentDocument.body||this.contentDocument).children[0]);this.remove()"></iframe>
    </div>
    <UIButton v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  // content
  type: 'button',
  icon: undefined,
  text: 'Button text',
  href: undefined,
  to: undefined,
  // view
  theme: 'transparent',
  color: 'default',
  size: 'md',
  iconSize: undefined,
  align: 'center',
  block: false,
  reverseOrder: false,
  // status
  disabled: false,
  loading: false,
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  text: 'Button text',
  size: 'sm',
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  text: 'Button text',
  size: 'md',
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  text: 'Button text',
  size: 'lg',
};

export const Loading = Template.bind({});
Loading.args = {
  text: 'Button text',
  icon: undefined,
  loading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Button text',
  icon: undefined,
  disabled: true,
};