import UIButton from './UIButton.vue';
import { listSize, listSizeX } from '@/shared/types/sizes';
import { iconList } from '@/lib-components/UIIcon/mockup/Icon.type';
import sprite from '@/lib-components/UIIcon/mockup/sprite-icons.svg';
import vueRouter from 'storybook-vue3-router';
import '@/shared/style/lib-components.scss';

export default {
  title: 'Components/UIButton',
  component: UIButton,
  argTypes: {
    type: {
      description: 'The default behavior of the button',
      options: ['button', 'submit', 'reset'],
      table: {
        type: {
          summary: 'ButtonType',
          detail: '"button" | "submit" | "reset"',
        },
      },
      control: { type: 'select' },
    },
    icon: {
      description: 'Icon displayed inside the button',
      options: [ undefined, ...iconList ],
      control: { type: 'select' },
    },
    text: {
      description: 'Text displayed inside the button',
    },
    href: {
      description: 'The URL that the hyperlink points to',
    },
    to: {
      description: 'Vue router-link. Denotes the target route of the link. When clicked, the value of the to prop will be passed to router.push() internally',
      table: {
        type: {
          summary: 'RouteLocationRaw',
          detail: 'Example => :to="{name: \'Home\'}"',
        },
      },
    },
    theme: {
      description: 'Style with which the button will be displayed',
      table: {
        type: {
          summary: 'ButtonTheme',
          detail: '"solid", "outline", "transparent", "text"',
        },
      },
      options: ['solid', 'outline', 'transparent', 'text'],
      control: { type: 'select' },
    },
    color: {
      description: 'Predefined color wich the button will be displayed',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error'],
      type: { name: 'string', required: false },
      table: {
        type: {
          summary: 'ButtonColor',
          detail: '"default" | "primary" | "secondary" | "success" | "warning" | "error"',
        },
      },
      control: { type: 'select' },
    },
    size: {
      description: 'Base size for paddings and font-size',
      table: {
        type: {
          summary: 'Size',
          detail: '"sm" | "md" | "lg"',
        },
      },
      options: listSize,
      control: { type: 'select' },
    },
    iconSize: {
      description: 'The displayed size of the icon',
      options: [ undefined, ...listSizeX ],
      table: {
        type: {
          summary: 'SizeX',
          detail: '"xs" => (0.75 rem) | "sm" => (1 rem) | "md" => (1.5 rem) | "lg" => (2.25 rem) | "xl" => (3 rem)',
        },
      },
      control: { type: 'select' },
    },
    align: {
      description: 'Sets the distribution of space between and around content items',
      table: {
        type: {
          summary: 'ButtonAlign',
          detail: '"left" | "center" | "right" | "space-between"',
        },
      },
      options: ['left', 'center', 'right', 'space-between'],
      control: { type: 'select' },
    },
    block: {
      description: 'Makes the button fill the entire width of space',
    },
    reverseOrder: {
      description: 'Changes the content direction from right to left',
    },
    disabled: {
      description: 'Prevents the user from interacting with the button: it cannot be pressed or focused',
    },
    loading: {
      description: 'Prevents the user from interacting with the button: it cannot be pressed or focused. And adds a loading icon',
    },
    // events
    clicked: {
      description: 'When the button is clicked the event is emited so the parent can listen to it using @clicked',
      table: { type: { summary: 'MouseEvent' } },
    },
    // slots
    default: {
      description: 'The default slot allows you to change the button content to any HTML element',
      table: { type: { summary: 'HTMLElement' } },
    },
  },
  parameters: { controls: { expanded: true } },
  decorators: [ vueRouter() ],
};

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

export const ThemeDefault = Template.bind({});
ThemeDefault.args = {
  ...Default.args,
};

export const ThemeSolid = Template.bind({});
ThemeSolid.args = {
  ...Default.args,
  theme: 'solid',
};

export const ThemeOutline = Template.bind({});
ThemeOutline.args = {
  ...Default.args,
  theme: 'outline',
};

export const ThemeTransparent = Template.bind({});
ThemeTransparent.args = {
  ...Default.args,
  theme: 'transparent',
};

export const ThemeText = Template.bind({});
ThemeText.args = {
  ...Default.args,
  theme: 'text',
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  ...ThemeSolid.args,
  size: 'sm',
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  ...ThemeSolid.args,
  size: 'md',
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  ...ThemeSolid.args,
  size: 'lg',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...ThemeSolid.args,
  icon: 'home',
};

export const WithSmallIcon = Template.bind({});
WithSmallIcon.args = {
  ...WithIcon.args,
  iconSize: 'sm',
};

export const WithMediumIcon = Template.bind({});
WithMediumIcon.args = {
  ...WithIcon.args,
  iconSize: 'md',
};

export const WithLargeIcon = Template.bind({});
WithLargeIcon.args = {
  ...WithIcon.args,
  iconSize: 'lg',
};

export const Loading = Template.bind({});
Loading.args = {
  ...ThemeSolid.args,
  loading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...ThemeSolid.args,
  disabled: true,
};

export const ColorDefault = Template.bind({});
ColorDefault.args = {
  ...ThemeSolid.args,
  theme: 'solid',
};

export const ColorPrimary = Template.bind({});
ColorPrimary.args = {
  ...ColorDefault.args,
  color: 'primary',
};

export const ColorSecondary = Template.bind({});
ColorSecondary.args = {
  ...ColorDefault.args,
  color: 'secondary',
};

export const ColorSuccess = Template.bind({});
ColorSuccess.args = {
  ...ColorDefault.args,
  color: 'success',
};

export const ColorWarning = Template.bind({});
ColorWarning.args = {
  ...ColorDefault.args,
  color: 'warning',
};

export const ColorError = Template.bind({});
ColorError.args = {
  ...ColorDefault.args,
  color: 'error',
};

export const WithBlock = Template.bind({});
WithBlock.args = {
  ...ThemeSolid.args,
  block: true,
};

export const AlignDefault = Template.bind({});
AlignDefault.args = {
  ...ThemeSolid.args,
  icon: 'home',
  block: true,
};

export const AlignLeft = Template.bind({});
AlignLeft.args = {
  ...AlignDefault.args,
  align: 'left',
};

export const AlignCenter = Template.bind({});
AlignCenter.args = {
  ...AlignDefault.args,
  align: 'center',
};

export const AlignRight = Template.bind({});
AlignRight.args = {
  ...AlignDefault.args,
  align: 'right',
};

export const AlignSpaceBetween = Template.bind({});
AlignSpaceBetween.args = {
  ...AlignDefault.args,
  align: 'space-between',
};

export const ReverseOrder = Template.bind({});
ReverseOrder.args = {
  ...ThemeSolid.args,
  icon: 'home',
  reverseOrder: true,
};

export const ReverseOrderBlockSpaceBetween = Template.bind({});
ReverseOrderBlockSpaceBetween.args = {
  ...ReverseOrder.args,
  block: true,
  align: 'space-between',
}; 