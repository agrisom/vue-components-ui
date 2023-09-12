import UIExpansible from './UIExpansible.vue';

import type { ArgTypes, Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: 'Components/UIExpansible',
  component: UIExpansible,
  tags: ['autodocs'],
  argTypes: {
    text: {
      description: 'Text displayed at the header title',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    open: {
      description: 'Defines if the expansible content is visible on init',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    dense: {
      description: 'Removes padding to make it more compact',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    clipped: {
      description: 'Removes padding only on the sides to make it more compact',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
  } as ArgTypes,
  render: args => ({
    components: { UIExpansible },
    setup() {
      return { args };
    },
    template:  `
      <UIExpansible v-bind="args" v-model:open="args.open">
        <p>Component content added with the default slot</p>
      </UIExpansible>
    `,
  }),
  args: { text: 'Expandible header', open: false },
} satisfies Meta<typeof UIExpansible>;

export default meta;
type Story = StoryObj<typeof UIExpansible>;

export const Default: Story = {};

export const Open: Story = {
  args: {
    open: true,
  },
};

export const Dense: Story = {
  args: {
    dense: true,
  },
};

export const Clipped: Story = {
  args: {
    clipped: true,
  },
};