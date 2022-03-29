import UIIcon from './UIIcon.vue';
import { listSizeX } from '@/shared/types/sizes';
import { iconList } from './mockup/Icon.type';
import sprite from './mockup/sprite-icons.svg';
import '@/shared/style/lib-components.scss';

export default {
  title: 'Components/UIIcon',
  component: UIIcon,
  argTypes: {
    name: {
      description: 'The #id to the icon from your <code>sprite-icons.svg</code> that needs to be duplicated',
      options: iconList,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      control: { type: 'select' },
    },
    description: {
      description: 'Provides an accessible, long-text description of the SVG. The attribute <code>desc</code> will be the same as name if not defined',
    },
    size: {
      description: 'The displayed width/height predefined for the rectangular viewport',
      options: listSizeX,
      table: {
        type: {
          summary: 'SizeX',
          detail: '"xs" => (0.75 rem) | "sm" => (1 rem) | "md" => (1.5 rem) | "lg" => (2.25 rem) | "xl" => (3 rem)',
        },
      },
      control: { type: 'select' },
    },
    width: {
      description: 'The displayed width of the rectangular viewport',
      table: {
        type: {
          summary: 'length | percentage',
          detail: '"em" | "ex" | "px" | "in" | "cm" | "mm" | "pt" | "pc" | "%"',
        },
      },
    },
    height: {
      description: 'The displayed height of the rectangular viewport',
      table: {
        type: {
          summary: 'length | percentage',
          detail: '"em" | "ex" | "px" | "in" | "cm" | "mm" | "pt" | "pc" | "%"',
        },
      },
    },
  },
  parameters: { controls: { expanded: true } },
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
  description: undefined,
  size: 'md',
  width: undefined,
  height: undefined,
};

export const SizeExtraSmall = Template.bind({});
SizeExtraSmall.args = {
  ...Default.args,
  name: 'home',
  size: 'xs',
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  ...Default.args,
  name: 'home',
  size: 'sm',
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  ...Default.args,
  name: 'home',
  size: 'md',
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  ...Default.args,
  name: 'home',
  size: 'lg',
};

export const SizeExtraLarge = Template.bind({});
SizeExtraLarge.args = {
  ...Default.args,
  name: 'home',
  size: 'xl',
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  ...Default.args,
  name: 'home',
  width: '10rem',
  height: '10rem',
};