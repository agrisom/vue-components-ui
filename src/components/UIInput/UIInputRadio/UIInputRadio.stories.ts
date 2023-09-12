import UIInputRadio from './UIInputRadio.vue';
import UIInputRadioItem from './UIInputRadioItem.vue';
import UIInputField from '@/components/UIInput/UIInputField/UIInputField.vue';

import { listSize } from '@/shared/types/size.type';

import type { ArgTypes, Meta, StoryObj } from '@storybook/vue3';
import type { InputValueRadio } from '@/components/UIInput/UIInput.types';

const meta = {
  title: 'Formulario/UIInputRadio',
  component: UIInputRadio,
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
    options: {
      description: 'Provides the list of values to show in the option list.',
      defaultValue: { summary: '[]' },
      table: {
        type: {
          summary: 'InputValueRadio',
          detail: `
            {
              value: string;
              text: string;
              icon?: Icon;
              disabled?: boolean;
            }
          `,
        },
      },
      control: { type: 'object' },
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
    center: {
      description: 'Places items inside label aligned verticaly centered',
      defaultValue: { summary: 'false' },
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
    alwaysVisible: {
      description: 'Indicates that the icon is also shown when the option is not checked.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
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
    name: 'radioOne',
    modelValue: 'val_1',
    options: [{
      value: 'val_1',
      text: 'Option One',
    }, {
      value: 'val_2',
      text: 'Option Two',
    }, {
      value: 'val_3',
      text: 'Option Three',
    }] as InputValueRadio[],
    size: 'md',
    disabled: false,
    alwaysVisible: false,
    center: true,
    required: false,
  },
  render: args => ({
    components: { UIInputRadio },
    setup() {
      return { args };
    },
    template:  `
      <UIInputRadio v-bind="args" v-model:model-value="args.modelValue" />
    `,
  }),
} satisfies Meta<typeof UIInputRadio>;

export default meta;
type Story = StoryObj<typeof UIInputRadio>;

export const Default: Story = {};

export const Icon: Story = {
  args: {
    options: [{
      value: 'val_1',
      text: 'Option One',
      icon: 'home',
    }, {
      value: 'val_2',
      text: 'Option Two',
      icon: 'check',
    }, {
      value: 'val_3',
      text: 'Option Three',
      icon: 'trash',
    }, {
      value: 'val_4',
      text: 'Option Four',
    }] as InputValueRadio[],
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

export const OptionsDisabled: Story = {
  args: {
    options: [{
      value: 'val_1',
      text: 'Option One',
      disabled: true,
    }, {
      value: 'val_2',
      text: 'Option Two',
    }, {
      value: 'val_3',
      text: 'Option Three',
    }, {
      value: 'val_4',
      text: 'Option Four',
      disabled: true,
    }] as InputValueRadio[],
  },
};

export const CenterFalse: Story = {
  args: {
    center: false,
  },
  render: args => ({
    components: { UIInputRadio, UIInputRadioItem },
    setup() {
      return { UIInputRadio, args };
    },
    template: `
      <UIInputRadio v-bind="args" v-model:model-value="args.modelValue">
        <template #label-val_2>
          <span>text one</span>
          <span>text two</span>
        </template>
      </UIInputRadio>
    `,
  }),
};

export const Center: Story = {
  args: {
    center: true,
  },
  render: args => ({
    components: { UIInputRadio, UIInputRadioItem },
    setup() {
      return { UIInputRadio, args };
    },
    template: `
      <UIInputRadio v-bind="args" v-model:model-value="args.modelValue">
        <template #label-val_2>
          <span>text one</span>
          <span>text two</span>
        </template>
      </UIInputRadio>
    `,
  }),
};

export const FieldLabel: Story = {
  render: args => ({
    components: { UIInputRadio, UIInputField },
    setup() {
      return { UIInputRadio, UIInputField, args };
    },
    template: `
      <UIInputField label="Text label">
        <template #default="{id}">
          <UIInputRadio v-bind="args" v-model:model-value="args.modelValue" :id="id" />
        </template>
      </UIInputField>
    `,
  }),
};

export const FieldLabelHidden: Story = {
  render: args => ({
    components: { UIInputRadio, UIInputField },
    setup() {
      return { UIInputRadio, UIInputField, args };
    },
    template: `
      <UIInputField labelHidden>
        <template #default="{id}">
          <UIInputRadio v-bind="args" v-model:model-value="args.modelValue" :id="id" />
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
    components: { UIInputRadio, UIInputField },
    setup() {
      return { UIInputRadio, UIInputField, args };
    },
    template: `
      <UIInputField label="Text label" required>
        <template #default="{id}">
          <UIInputRadio v-bind="args" v-model:model-value="args.modelValue" :id="id" />
        </template>
      </UIInputField>
    `,
  }),
};

export const Success: Story = {
  render: args => ({
    components: { UIInputRadio, UIInputField },
    setup() {
      return { UIInputRadio, UIInputField, args };
    },
    template: `
      <UIInputField label="Text label" success>
        <template #default="{id}">
          <UIInputRadio v-bind="args" v-model:model-value="args.modelValue" :id="id" />
        </template>
      </UIInputField>
    `,
  }),
};

export const Error: Story = {
  render: args => ({
    components: { UIInputRadio, UIInputField },
    setup() {
      return { UIInputRadio, UIInputField, args };
    },
    template: `
      <UIInputField label="Text label" error errorText="This is the error text">
        <template #default="{id}">
          <UIInputRadio v-bind="args" v-model:model-value="args.modelValue" :id="id" />
        </template>
      </UIInputField>
    `,
  }),
};

export const Hint: Story = {
  render: args => ({
    components: { UIInputRadio, UIInputField },
    setup() {
      return { UIInputRadio, UIInputField, args };
    },
    template: `
      <UIInputField label="Text label" hintText="This is a hint text">
        <template #default="{id}">
          <UIInputRadio v-bind="args" v-model:model-value="args.modelValue" :id="id" />
        </template>
      </UIInputField>
    `,
  }),
};