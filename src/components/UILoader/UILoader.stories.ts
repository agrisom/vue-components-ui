import UILoader from './UILoader.vue';
import { listSizeX } from '@/shared/types/size.type';
import { listColor } from '@/shared/types/color.type';

import type { ArgTypes, Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: 'Components/UILoader',
  component: UILoader,
  tags: ['autodocs'],
  argTypes: {
    block: {
      description: 'display: inline-flex',
      control: { type: 'boolean' },
    },
    size: {
      description: 'The displayed width/height predefined for the rectangular viewport',
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
    color: {
      description: 'Color from the defined palette',
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
  } as ArgTypes,
  args: { size: 'md', color: 'default' },
} satisfies Meta<typeof UILoader>;

export default meta;
type Story = StoryObj<typeof UILoader>;

export const Default: Story = {};

export const SizeXs: Story = {
  args: {
    size: 'xs',
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

export const SizeXl: Story = {
  args: {
    size: 'xl',
  },
};

export const Block: Story = {
  args: {
    block: true,
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