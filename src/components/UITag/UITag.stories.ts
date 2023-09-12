import UITag from './UITag.vue';
import { listSize } from '@/shared/types/size.type';

import type { ArgTypes, Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: 'Components/UITag',
  component: UITag,
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
    color: {
      description: 'CSS background color',
      defaultValue: { summary: '#D9E4F6' },
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'color' },
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
  args: { text: 'My tag', size: 'md' },
} satisfies Meta<typeof UITag>;

export default meta;
type Story = StoryObj<typeof UITag>;

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

export const CustomColor: Story = {
  args: {
    color: '#d0e3dc',
  },
};