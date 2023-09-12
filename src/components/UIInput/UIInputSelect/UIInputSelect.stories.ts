import UIInputSelect from './UIInputSelect.vue';
import UIInputField from '@/components/UIInput/UIInputField/UIInputField.vue';

import { listIcon } from '@/shared/types/icon.type';
import { listSize } from '@/shared/types/size.type';

import type { ArgTypes, Meta, StoryObj } from '@storybook/vue3';
import type { InputValue } from '@/components/UIInput/UIInput.types';

const meta = {
  title: 'Formulario/UIInputSelect',
  component: UIInputSelect,
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
    unknownOption: {
      description: 'Adds an option with empty value ("") and the defined text',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    options: {
      description: 'Provides the list of values to show in the dropdown menu.',
      defaultValue: { summary: '[]' },
      table: {
        type: {
          summary: 'InputValue',
          detail: `
            {
              value: string;
              text: string;
            }
          `,
        },
      },
      control: { type: 'object' },
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
    options: [{
      value: 'val_1',
      text: 'Option One',
    }, {
      value: 'val_2',
      text: 'Option Two',
    }, {
      value: 'val_3',
      text: 'Option Three',
    }] as InputValue[],
    iconPrepend: undefined,
    iconAppend: undefined,
    size: 'md',
    disabled: false,
    required: false,
  },
} satisfies Meta<typeof UIInputSelect>;

export default meta;
type Story = StoryObj<typeof UIInputSelect>;

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

export const UnknownOption: Story = {
  args: {
    unknownOption: 'Desconocido',
  },
};

export const FieldLabel: Story = {
  render: args => ({
    components: { UIInputSelect, UIInputField },
    setup() {
      return { UIInputSelect, UIInputField, args };
    },
    template: `
      <UIInputField label="Text label">
        <template #default="{id}">
          <UIInputSelect v-bind="args" :id="id" />
        </template>
      </UIInputField>
    `,
  }),
};

export const FieldLabelHidden: Story = {
  render: args => ({
    components: { UIInputSelect, UIInputField },
    setup() {
      return { UIInputSelect, UIInputField, args };
    },
    template: `
      <UIInputField labelHidden>
        <template #default="{id}">
          <UIInputSelect v-bind="args" :id="id" />
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
    components: { UIInputSelect, UIInputField },
    setup() {
      return { UIInputSelect, UIInputField, args };
    },
    template: `
      <UIInputField label="Text label" required>
        <template #default="{id}">
          <UIInputSelect v-bind="args" :id="id" />
        </template>
      </UIInputField>
    `,
  }),
};

export const Success: Story = {
  render: args => ({
    components: { UIInputSelect, UIInputField },
    setup() {
      return { UIInputSelect, UIInputField, args };
    },
    template: `
      <UIInputField label="Text label" success>
        <template #default="{id}">
          <UIInputSelect v-bind="args" :id="id" />
        </template>
      </UIInputField>
    `,
  }),
};

export const Error: Story = {
  render: args => ({
    components: { UIInputSelect, UIInputField },
    setup() {
      return { UIInputSelect, UIInputField, args };
    },
    template: `
      <UIInputField label="Text label" error errorText="This is the error text">
        <template #default="{id}">
          <UIInputSelect v-bind="args" :id="id" />
        </template>
      </UIInputField>
    `,
  }),
};

export const Hint: Story = {
  render: args => ({
    components: { UIInputSelect, UIInputField },
    setup() {
      return { UIInputSelect, UIInputField, args };
    },
    template: `
      <UIInputField label="Text label" hintText="This is a hint text">
        <template #default="{id}">
          <UIInputSelect v-bind="args" :id="id" />
        </template>
      </UIInputField>
    `,
  }),
};