import UILoader from './UILoader.vue';
import { listSizeX } from '@/shared/types/size.type';

import type { ArgTypes, Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: 'Components/UILoader',
  component: UILoader,
  tags: ['autodocs'],
  argTypes: {
    block: {
      description: 'display: inline-flex',
      defaultValue: { summary: 'true' },
      table: { type: { summary: 'boolean' } },
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
  } as ArgTypes,
  args: { size: 'md' },
} satisfies Meta<typeof UILoader>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const CustomColor: Story = {
  decorators: [
    (story) => ({
      components: { story },
      template: `
        <story style="color: tomato" />
      `,
    })
  ],
};