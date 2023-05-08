import UIButton from './UIButton.vue';
import { listIcon } from '@/shared/types/icon.type';
import { listSize, listSizeX } from '@/shared/types/size.type';

import type { ArgTypes, Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: 'Components/UIButton',
  component: UIButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: 'The default behavior of the button',
      options: ['button', 'submit', 'reset'],
      defaultValue: { summary: 'button' },
      table: {
        type: { summary: 'Type', detail: '"button" | "submit" | "reset"' },
      },
      control: { type: 'select' },
    },
    theme: {
      description: 'Style with which the button will be displayed',
      options: ['solid', 'outline', 'transparent', 'text'],
      defaultValue: { summary: 'transparent' },
      table: {
        type: { summary: 'Theme', detail: '"solid" | "outline" | "transparent" | "text"' },
      },
      control: { type: 'select' },
    },
    color: {
      description: 'Color from the defined palette',
      options: ['default', 'primary', 'secondary'],
      defaultValue: { summary: 'default' },
      table: {
        type: { 
          summary: 'Color',
          detail: '"default" | "primary" | "secondary"',
        },
      },
      control: { type: 'select' },
    },
    icon: {
      description: 'The #id to the icon from your <code>sprite-icons.svg</code> that renders inside the button',
      options: listIcon,
      table: {
        type: { summary: 'Icon' },
      },
      control: { type: 'select' },
    },
    size: {
      description: 'The displayed width/height',
      options: listSize,
      defaultValue: { summary: 'md' },
      table: {
        type: {
          summary: 'Size',
          detail: '"sm" | "md" | "lg"',
        },
      },
      control: { type: 'select' },
    },
    iconSize: {
      description: 'The displayed width/height for the icon',
      options: listSizeX,
      defaultValue: { summary: 'md' },
      table: {
        type: {
          summary: 'SizeX',
          detail: '"xs" => (12px) | "sm" => (16px) | "md" => (24px) | "lg" => (36px) | "xl" => (48px)',
        },
      },
      control: { type: 'select' },
    },
    align: {
      description: 'Sets the distribution of space between and around content items',
      options: ['left', 'center', 'right', 'space-between'],
      defaultValue: { summary: 'center' },
      table: {
        type: { summary: 'Align', detail: '"left" | "center" | "right" | "space-between"' },
      },
      control: { type: 'select' },
    },
    text: {
      description: 'Text displayed inside the button',
      table: {
        type: { summary: 'string' },
      },
      control: { type: 'text' },
    },
    href: {
      description: 'The URL that the hyperlink points to',
      table: {
        type: { summary: 'string' },
      },
      control: { type: 'text' },
    },
    to: {
      description: 'Vue router-link. Denotes the target route of the link. When clicked, the value of the to prop will be passed to router.push() internally',
      table: {
        type: { summary: 'RouteLocationRaw', detail: 'Example => :to="{name: \'Home\'}"' },
      },
      control: { type: 'object' },
    },
    target: {
      description: 'Where to display the linked URL, as the name for a browsing context.',
      options: ['_self', '_blank', '_parent', '_top'],
      defaultValue: { summary: '_blank' },
      table: {
        type: { summary: 'Target', detail: '"_self" | "_blank" | "_parent" | "_top"' },
      },
      control: { type: 'select' },
    },
    block: {
      description: 'Makes the button fill the entire width of space',
      table: { type: { summary: 'boolean' } },
      defaultValue: { summary: 'false' },
      control: { type: 'boolean' },
    },
    reverseOrder: {
      description: 'Changes the content direction from right to left',
      table: { type: { summary: 'boolean' } },
      defaultValue: { summary: 'false' },
      control: { type: 'boolean' },
    },
    disabled: {
      description: 'Prevents the user from interacting with the button: it cannot be pressed or focused',
      table: { type: { summary: 'boolean' } },
      defaultValue: { summary: 'false' },
      control: { type: 'boolean' },
    },
    loading: {
      description: 'Prevents the user from interacting with the button: it cannot be pressed or focused. And adds a loading icon',
      table: { type: { summary: 'boolean' } },
      defaultValue: { summary: 'false' },
      control: { type: 'boolean' },
    },
  } as ArgTypes,
  args: {
    type: 'button',
    theme: 'transparent',
    color: 'default',
    size: 'md',
    align: 'center',
    target: '_blank',
    text: 'Button text'
  },
} satisfies Meta<typeof UIButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThemeSolid: Story = {
  args: {
    theme: 'solid',
  },
};

export const ThemeOutline: Story = {
  args: {
    theme: 'outline',
  },
};

export const ThemeTransparent: Story = {
  args: {
    theme: 'transparent',
  },
};

export const ThemeText: Story = {
  args: {
    theme: 'text',
  },
};

export const ColorDefault: Story = {
  args: {
    theme: 'solid',
    color: 'default',
  },
};

export const ColorPrimary: Story = {
  args: {
    theme: 'solid',
    color: 'primary',
  },
};

export const ColorSecondary: Story = {
  args: {
    theme: 'solid',
    color: 'secondary',
  },
};

export const Icon: Story = {
  args: {
    icon: 'check-double',
  },
};

export const IconXs: Story = {
  args: {
    icon: 'check-double',
    iconSize: 'xs',
  },
};

export const IconSm: Story = {
  args: {
    icon: 'check-double',
    iconSize: 'sm',
  },
};

export const IconMd: Story = {
  args: {
    icon: 'check-double',
    iconSize: 'md',
  },
};

export const IconLg: Story = {
  args: {
    icon: 'check-double',
    iconSize: 'lg',
  },
};

export const IconXl: Story = {
  args: {
    icon: 'check-double',
    iconSize: 'xl',
  },
};

export const SizeSm: Story = {
  args: {
    size: 'sm',
  },
};

export const SizeMd: Story = {
  args: {
    size: 'md',
  },
};

export const SizeLg: Story = {
  args: {
    size: 'lg',
  },
};

export const Default: Story = {
  args: {
    theme: 'transparent',
  },
};

export const LoadingSolid: Story = {
  args: {
    theme: 'solid',
    loading: true,
  },
};

export const LoadingOutline: Story = {
  args: {
    theme: 'outline',
    loading: true,
  },
};

export const LoadingTransparent: Story = {
  args: {
    theme: 'transparent',
    loading: true,
  },
};

export const LoadingText: Story = {
  args: {
    theme: 'text',
    loading: true,
  },
};