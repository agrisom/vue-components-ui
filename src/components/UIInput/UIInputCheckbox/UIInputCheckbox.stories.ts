import UIInputCheckbox from './UIInputCheckbox.vue';
import UIInputField from '@/components/UIInput/UIInputField/UIInputField.vue';

import { listIcon } from '@/shared/types/icon.type';
import { listSize } from '@/shared/types/size.type';

import type { ArgTypes, Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: 'Formulario/UIInputCheckbox',
  component: UIInputCheckbox,
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
      defaultValue: { summary: 'false' },
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    label: {
      description: 'Text that represents a caption for an item in a slot',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    icon: {
      description: 'The #id to the icon from your <code>sprite-icons.svg</code> that renders inside the checkbox',
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
    indeterminate: {
      description: 'This is a state in which it\'s impossible to say whether the item is toggled on or off.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    alwaysVisible: {
      description: 'Indicates that the icon is also shown when the value is false.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    center: {
      description: 'Places items inside label aligned verticaly centered',
      defaultValue: { summary: 'true' },
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
    label: 'Checkbox label',
    modelValue: false,
    icon: undefined,
    size: 'md',
    disabled: false,
    indeterminate: false,
    center: true,
    required: false,
    alwaysVisible: false,
  },
  render: args => ({
    components: { UIInputCheckbox },
    setup() {
      return { args };
    },
    template:  `
      <UIInputCheckbox v-bind="args" v-model:model-value="args.modelValue" v-model:indeterminate="args.indeterminate" />
    `,
  }),
} satisfies Meta<typeof UIInputCheckbox>;

export default meta;
type Story = StoryObj<typeof UIInputCheckbox>;

export const Default: Story = {};

export const CustomIcon: Story = {
  args: {
    icon: 'check-double',
    modelValue: true,
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

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    modelValue: true,
  },
};

export const IconAlwaysVisible: Story = {
  args: {
    icon: 'cibersegurity',
    alwaysVisible: true,
  },
};

export const CenterFalse: Story = {
  args: {
    center: false,
  },
  render: args => ({
    components: { UIInputCheckbox },
    setup() {
      return { UIInputCheckbox, args };
    },
    template: `
      <UIInputCheckbox v-bind="args" v-model:model-value="args.modelValue" v-model:indeterminate="args.indeterminate">
        <span>text one</span>
        <span>text two</span>
      </UIInputCheckbox>
    `,
  }),
};

export const Center: Story = {
  args: {
    center: true,
  },
  render: args => ({
    components: { UIInputCheckbox },
    setup() {
      return { UIInputCheckbox, args };
    },
    template: `
      <UIInputCheckbox v-bind="args" v-model:model-value="args.modelValue" v-model:indeterminate="args.indeterminate">
        <span>text one</span>
        <span>text two</span>
      </UIInputCheckbox>
    `,
  }),
};

export const FieldLabel: Story = {
  render: args => ({
    components: { UIInputCheckbox, UIInputField },
    setup() {
      return { UIInputCheckbox, UIInputField, args };
    },
    template: `
      <UIInputField label="Text label">
        <template #default="{id}">
          <UIInputCheckbox v-bind="args" v-model:model-value="args.modelValue" v-model:indeterminate="args.indeterminate" :id="id" />
        </template>
      </UIInputField>
    `,
  }),
};

export const Success: Story = {
  render: args => ({
    components: { UIInputCheckbox, UIInputField },
    setup() {
      return { UIInputCheckbox, UIInputField, args };
    },
    template: `
      <UIInputField label="Text label" success>
        <template #default="{id}">
          <UIInputCheckbox v-bind="args" v-model:model-value="args.modelValue" v-model:indeterminate="args.indeterminate" :id="id" />
        </template>
      </UIInputField>
    `,
  }),
};

export const Error: Story = {
  render: args => ({
    components: { UIInputCheckbox, UIInputField },
    setup() {
      return { UIInputCheckbox, UIInputField, args };
    },
    template: `
      <UIInputField label="Text label" error errorText="This is the error text">
        <template #default="{id}">
          <UIInputCheckbox v-bind="args" v-model:model-value="args.modelValue" v-model:indeterminate="args.indeterminate" :id="id" />
        </template>
      </UIInputField>
    `,
  }),
};

export const Hint: Story = {
  render: args => ({
    components: { UIInputCheckbox, UIInputField },
    setup() {
      return { UIInputCheckbox, UIInputField, args };
    },
    template: `
      <UIInputField label="Text label" hintText="This is a hint text">
        <template #default="{id}">
          <UIInputCheckbox v-bind="args" v-model:model-value="args.modelValue" v-model:indeterminate="args.indeterminate" :id="id" />
        </template>
      </UIInputField>
    `,
  }),
};