import UITooltip from './UITooltip.vue';

import type { ArgTypes, Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: 'Components/UITooltip',
  component: UITooltip,
  argTypes: {
    text: {
      description: 'Defines the text content for the Tooltip',
      table: {
        type: { detail: 'string' },
      },
      control: { type: 'text' },
    },
    block: {
      description: 'Changes display value to block',
      table: { type: { summary: 'boolean' } },
      defaultValue: { summary: 'false' },
      control: { type: 'boolean' },
    },
  } as ArgTypes,
  args: {
    text: 'Title',
  },
  render: args => ({
    components: { UITooltip },
    setup() {
      return { args };
    },
    template:  `
      <UITooltip v-bind="args">
        <span>Text with tooltip</span>
      </UITooltip>
    `,
  }),
} satisfies Meta<typeof UITooltip>;

export default meta;
type Story = StoryObj<typeof UITooltip>;

export const Default: Story = {};

export const Block: Story = {
  args: {
    block: true,
  },
};