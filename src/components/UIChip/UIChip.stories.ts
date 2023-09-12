import UIChip from './UIChip.vue';
import { listSize } from '@/shared/types/size.type';

import type { ArgTypes, Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: 'Components/UIChip',
  component: UIChip,
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
    close: {
      description: 'Adds a close button that emits an event to the parent',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    size: {
      description: 'The displayed width/height predefined for the rectangular viewport',
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
  } as ArgTypes,
  args: { text: 'My chip', size: 'md' },
} satisfies Meta<typeof UIChip>;

export default meta;
type Story = StoryObj<typeof UIChip>;

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

export const CloseSm: Story = {
  args: {
    close: true,
    size: 'sm',
  },
};

export const CloseMd: Story = {
  args: {
    close: true,
    size: 'md',
  },
};

export const CloseLg: Story = {
  args: {
    close: true,
    size: 'lg',
  },
};