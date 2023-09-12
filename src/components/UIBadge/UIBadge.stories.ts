import UIBadge from './UIBadge.vue';
import { listIcon } from '@/shared/types/icon.type';
import { listColor } from '@/shared/types/color.type';
import { listSizeX } from '@/shared/types/size.type';

import type { ArgTypes, Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: 'Components/UIBadge',
  component: UIBadge,
  tags: ['autodocs'],
  argTypes: {
    text: {
      description: 'Text displayed inside the component',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    icon: {
      description: 'The #id to the icon from your <code>sprite-icons.svg</code> that renders inside the button',
      options: ['', ...listIcon],
      table: {
        type: { summary: 'Icon' },
      },
      control: { type: 'select' },
    },
    position: {
      description: 'Position where the component is rendered',
      options: ['inline', 'inline-top', 'inline-bottom', 'top-left', 'top-right', 'bottom-left', 'bottom-right'],
      defaultValue: { summary: 'inline' },
      table: {
        type: { summary: 'BadgePosition', detail: '"inline" | "inline-top" | "inline-bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right"' },
      },
      control: { type: 'select' },
    },
    color: {
      description: 'Color from the defined palette',
      options: listColor,
      defaultValue: { summary: 'primary' },
      table: {
        type: {
          summary: 'Color',
          detail: '"default" | "primary" | "secondary" | "success" | "warning" | "error"',
        },
      },
      control: { type: 'select' },
    },
    size: {
      description: 'The displayed width/height predefined for the rectangular viewport',
      options: listSizeX,
      defaultValue: { summary: 'sm' },
      table: {
        type: {
          summary: 'Size',
          detail: '"xs" | "sm" | "md" | "lg" | "xl"',
        },
      },
      control: { type: 'select' },
    },
    iconSize: {
      description: 'The displayed width/height for the icon',
      options: listSizeX,
      defaultValue: { summary: 'sm' },
      table: {
        type: {
          summary: 'SizeX',
          detail: '"xs" => (12px) | "sm" => (16px) | "md" => (24px) | "lg" => (36px) | "xl" => (48px)',
        },
      },
      control: { type: 'select' },
    },
    oflimits: {
      description: 'Translates component outside the content box limits',
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
    circle: {
      description: 'Changes the shape to a perfect circle, showing only the icon or converting the text into a number if icon is not provided',
      table: { type: { summary: 'boolean' } },
      defaultValue: { summary: 'false' },
      control: { type: 'boolean' },
    },
  } as ArgTypes,
  args: { text: 'My badge', position: 'inline', color: 'primary', size: 'sm', oflimits: false, reverseOrder: false, circle: false },
} satisfies Meta<typeof UIBadge>;

export default meta;
type Story = StoryObj<typeof UIBadge>;

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

export const Inline: Story = {
  args: {
    position: 'inline',
  },
};

export const InlineTop: Story = {
  args: {
    position: 'inline-top',
  },
};

export const InlineBottom: Story = {
  args: {
    position: 'inline-bottom',
  },
};

export const TopLeft: Story = {
  args: {
    position: 'top-left',
  },
};

export const TopRight: Story = {
  args: {
    position: 'top-right',
  },
};

export const BottomLeft: Story = {
  args: {
    position: 'bottom-left',
  },
};

export const BottomRight: Story = {
  args: {
    position: 'bottom-right',
  },
};

export const TopRightOflimits: Story = {
  args: {
    position: 'top-right',
    oflimits: true,
  },
};

export const ReverseOrder: Story = {
  args: {
    icon: 'home',
    reverseOrder: true,
  },
};

export const IconCircle: Story = {
  args: {
    icon: 'home',
    circle: true,
  },
};

export const CountCircle: Story = {
  args: {
    text: '25',
    circle: true,
  },
};

export const CountMaxCircle: Story = {
  args: {
    text: '250',
    circle: true,
  },
};