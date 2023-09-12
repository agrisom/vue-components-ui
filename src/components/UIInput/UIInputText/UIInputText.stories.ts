import UIInputText from './UIInputText.vue';
import UIInputField from '@/components/UIInput/UIInputField/UIInputField.vue';

import { listIcon } from '@/shared/types/icon.type';
import { listSize } from '@/shared/types/size.type';

import type { ArgTypes, Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: 'Formulario/UIInputText',
  component: UIInputText,
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
    list: {
      description: 'The value given to the list attribute should be the id of a <datalist> element located in the same document. The <datalist> provides a list of predefined values to suggest to the user for this input.',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    iconPrepend: {
      description: 'The #id to the icon from your <code>sprite-icons.svg</code> that renders on the inside left of the input',
      options: ['', ...listIcon],
      table: {
        type: { summary: 'Icon' },
      },
      control: { type: 'select' },
    },
    iconAppend: {
      description: 'The #id to the icon from your <code>sprite-icons.svg</code> that renders on the inside right of the input',
      options: ['', ...listIcon],
      table: {
        type: { summary: 'Icon' },
      },
      control: { type: 'select' },
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
    autocomplete: {
      description: 'Shows a list of posible values that has been entered in the same input field before',
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
    list: undefined,
    iconPrepend: undefined,
    iconAppend: undefined,
    size: 'md',
    disabled: false,
    autocomplete: false,
    required: false,
  },
} satisfies Meta<typeof UIInputText>;

export default meta;
type Story = StoryObj<typeof UIInputText>;

export const Default: Story = {};

export const Placeholder: Story = {
  args: {
    placeholder: 'Placeholder text',
  },
};

export const IconPrepend: Story = {
  args: {
    iconPrepend: 'check-double',
  },
};

export const IconAppend: Story = {
  args: {
    iconAppend: 'search',
  },
};

export const SizeSm: Story = {
  args: {
    iconAppend: 'check-double',
    size: 'sm',
  },
};

export const SizeMd: Story = {
  args: {
    size: 'md',
    iconAppend: 'check-double',
  },
};

export const SizeLg: Story = {
  args: {
    size: 'lg',
    iconAppend: 'check-double',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    iconAppend: 'check-double',
  },
};

export const Autocomplete: Story = {
  args: {
    autocomplete: true,
  },
};

export const FieldLabel: Story = {
  render: args => ({
    components: { UIInputText, UIInputField },
    setup() {
      return { UIInputText, UIInputField, args };
    },
    template: `
      <UIInputField label="Text label">
        <template #default="{id}">
          <UIInputText v-bind="args" :id="id" />
        </template>
      </UIInputField>
    `,
  }),
};

export const FieldLabelHidden: Story = {
  render: args => ({
    components: { UIInputText, UIInputField },
    setup() {
      return { UIInputText, UIInputField, args };
    },
    template: `
      <UIInputField labelHidden>
        <template #default="{id}">
          <UIInputText v-bind="args" :id="id" />
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
    components: { UIInputText, UIInputField },
    setup() {
      return { UIInputText, UIInputField, args };
    },
    template: `
      <UIInputField label="Text label" required>
        <template #default="{id}">
          <UIInputText v-bind="args" :id="id" />
        </template>
      </UIInputField>
    `,
  }),
};

export const Success: Story = {
  render: args => ({
    components: { UIInputText, UIInputField },
    setup() {
      return { UIInputText, UIInputField, args };
    },
    template: `
      <UIInputField label="Text label" success>
        <template #default="{id}">
          <UIInputText v-bind="args" :id="id" />
        </template>
      </UIInputField>
    `,
  }),
};

export const Error: Story = {
  render: args => ({
    components: { UIInputText, UIInputField },
    setup() {
      return { UIInputText, UIInputField, args };
    },
    template: `
      <UIInputField label="Text label" error errorText="This is the error text">
        <template #default="{id}">
          <UIInputText v-bind="args" :id="id" />
        </template>
      </UIInputField>
    `,
  }),
};

export const Hint: Story = {
  render: args => ({
    components: { UIInputText, UIInputField },
    setup() {
      return { UIInputText, UIInputField, args };
    },
    template: `
      <UIInputField label="Text label" hintText="This is a hint text">
        <template #default="{id}">
          <UIInputText v-bind="args" :id="id" />
        </template>
      </UIInputField>
    `,
  }),
};

export const List: Story = {
  render: args => ({
    components: { UIInputText, UIInputField },
    setup() {
      return { UIInputText, UIInputField, args };
    },
    template: `
      <UIInputField label="Text label" hintText="This is a hint text">
        <template #default="{id}">
          <UIInputText v-bind="args" :id="id" :list="id + '-list'">
            <datalist :id="id + '-list'">
              <option value="Chocolate"></option>
              <option value="Coconut"></option>
              <option value="Mint"></option>
              <option value="Strawberry"></option>
              <option value="Vanilla"></option>
            </datalist>
          </UIInputText>
        </template>
      </UIInputField>
    `,
  }),
};