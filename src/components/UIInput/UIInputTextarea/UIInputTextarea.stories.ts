import UIInputTextarea from './UIInputTextarea.vue';
import UIInputField from '@/components/UIInput/UIInputField/UIInputField.vue';

import { listSize } from '@/shared/types/size.type';

import type { ArgTypes, Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: 'Formulario/UIInputTextarea',
  component: UIInputTextarea,
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: 'Defines a unique identifier (ID) which must be unique in the whole document. Normally it is provided by the component UIInputField',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    name: {
      description: 'A string specifying a name for the input control',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    modelValue: {
      description: 'This is the initial value, and from then on it can retrieved by the event @update:modelValue',
      defaultValue: { summary: '' },
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    placeholder: {
      description: 'Provides a brief hint to the user as to what kind of information is expected in the field',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
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
    disabled: {
      description: 'Indicates that the user should not be able to interact with the input',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    required: {
      description: 'Indicates that the user must specify a value for the input before the owning form can be submitted',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
  } as ArgTypes,
  args: {
    id: undefined,
    name: '',
    placeholder: '',
    modelValue: '',
    size: 'md',
    disabled: false,
    required: false,
  },
} satisfies Meta<typeof UIInputTextarea>;

export default meta;
type Story = StoryObj<typeof UIInputTextarea>;

export const Default: Story = {};

export const Placeholder: Story = {
  args: {
    placeholder: 'Placeholder text',
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

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const FieldLabel: Story = {
  render: args => ({
    components: { UIInputTextarea, UIInputField },
    setup() {
      return { UIInputTextarea, UIInputField, args };
    },
    template: `
      <UIInputField label="Text label">
        <template #default="{id}">
          <UIInputTextarea v-bind="args" :id="id" />
        </template>
      </UIInputField>
    `,
  }),
};

export const FieldLabelHidden: Story = {
  render: args => ({
    components: { UIInputTextarea, UIInputField },
    setup() {
      return { UIInputTextarea, UIInputField, args };
    },
    template: `
      <UIInputField labelHidden>
        <template #default="{id}">
          <UIInputTextarea v-bind="args" :id="id" />
        </template>
      </UIInputField>
    `,
  }),
};

export const Required: Story = {
  args: {
    required: true,
  },
  render: args => ({
    components: { UIInputTextarea, UIInputField },
    setup() {
      return { UIInputTextarea, UIInputField, args };
    },
    template: `
      <UIInputField label="Text label" required>
        <template #default="{id}">
          <UIInputTextarea v-bind="args" :id="id" />
        </template>
      </UIInputField>
    `,
  }),
};

export const Success: Story = {
  render: args => ({
    components: { UIInputTextarea, UIInputField },
    setup() {
      return { UIInputTextarea, UIInputField, args };
    },
    template: `
      <UIInputField label="Text label" success>
        <template #default="{id}">
          <UIInputTextarea v-bind="args" :id="id" />
        </template>
      </UIInputField>
    `,
  }),
};

export const Error: Story = {
  render: args => ({
    components: { UIInputTextarea, UIInputField },
    setup() {
      return { UIInputTextarea, UIInputField, args };
    },
    template: `
      <UIInputField label="Text label" error errorText="This is the error text">
        <template #default="{id}">
          <UIInputTextarea v-bind="args" :id="id" />
        </template>
      </UIInputField>
    `,
  }),
};

export const Hint: Story = {
  render: args => ({
    components: { UIInputTextarea, UIInputField },
    setup() {
      return { UIInputTextarea, UIInputField, args };
    },
    template: `
      <UIInputField label="Text label" hintText="This is a hint text">
        <template #default="{id}">
          <UIInputTextarea v-bind="args" :id="id" />
        </template>
      </UIInputField>
    `,
  }),
};