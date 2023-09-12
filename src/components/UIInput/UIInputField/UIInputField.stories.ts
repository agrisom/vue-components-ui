import UIInputField from './UIInputField.vue';

import type { ArgTypes, Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: 'Formulario/UIInputField',
  component: UIInputField,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Text that represents a caption for an item in a slot',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    labelHidden: {
      description: 'Hiddes label and make it only visible by screen readers',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    required: {
      description: 'Adds a red symbol \'*\' to remind the user that the field must be completed',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    success: {
      description: 'Higlights the label, content and hint with green color',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    error: {
      description: 'Higlights the label, content, hint and error text with red color',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    errorText: {
      description: 'Text displayed when error is set',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    hintText: {
      description: 'Text that defines de field so the user knows how to complete it',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
  } as ArgTypes,
  args: { label: 'Text label', labelHidden: false, required: false, success: false, error: false, errorText: '', hintText: '' },
} satisfies Meta<typeof UIInputField>;

export default meta;
type Story = StoryObj<typeof UIInputField>;

export const Default: Story = {};

export const LabelHidden: Story = {
  args: {
    labelHidden: true,
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const Success: Story = {
  args: {
    success: true,
  },
};

export const Error: Story = {
  args: {
    error: true,
    errorText: 'This is the error text',
  },
};

export const Hint: Story = {
  args: {
    hintText: 'This is a hint text',
  },
};