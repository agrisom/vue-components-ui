import UIAvatar from './UIAvatar.vue';
import { listIcon } from '@/shared/types/icon.type';
import { listColor } from '@/shared/types/color.type';
import { listSizeX } from '@/shared/types/size.type';

import type { ArgTypes, Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: 'Components/UIAvatar',
  tags: ['autodocs'],
  component: UIAvatar,
  argTypes: {
    name: {
      description: 'Text displayed which the shown initials are split',
      table: {
        type: { summary: 'string' },
      },
      control: { type: 'text' },
    },
    id: {
      description: 'The identificator of the user. It\'s used to determiate the background color and its displayed if name is not provided',
      table: {
        type: { summary: 'string' },
      },
      control: { type: 'text' },
    },
    color: {
      description: 'Color from the defined palette, if id is not defined',
      options: listColor,
      defaultValue: { summary: 'default' },
      table: {
        type: {
          summary: 'Color',
          detail: '"default" | "primary" | "secondary" | "success" | "warning" | "error"',
        },
      },
      control: { type: 'select' },
    },
    icon: {
      description: 'The #id to the icon from your <code>sprite-icons.svg</code> that renders inside the button',
      options: ['', ...listIcon],
      table: {
        type: { summary: 'Icon' },
      },
      control: { type: 'select' },
    },
    size: {
      description: 'The displayed width/height',
      options: listSizeX,
      defaultValue: { summary: 'md' },
      table: {
        type: {
          summary: 'SizeX',
          detail: '"xs" | "sm" | "md" | "lg" | "xl"',
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
  } as ArgTypes,
  args: {
    name: 'Albert Griso Mendez',
    size: 'md',
  },
} satisfies Meta<typeof UIAvatar>;

export default meta;
type Story = StoryObj<typeof UIAvatar>;

export const Default: Story = {};

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

export const SizeXl: Story = {
  args: {
    size: 'xl',
  },
};

export const Icon: Story = {
  args: {
    id: undefined,
    icon: 'home',
    iconSize: 'xs',
  },
};

export const NoId: Story = {
  args: {
    id: undefined,
  },
};

export const ColorDefault: Story = {
  args: {
    color: 'default',
  },
};

export const ColorPrimary: Story = {
  args: {
    color: 'primary',
  },
};

export const ColorSecondary: Story = {
  args: {
    color: 'secondary',
  },
};

export const ColorSuccess: Story = {
  args: {
    color: 'success',
  },
};

export const ColorWarning: Story = {
  args: {
    color: 'warning',
  },
};

export const ColorError: Story = {
  args: {
    color: 'error',
  },
};