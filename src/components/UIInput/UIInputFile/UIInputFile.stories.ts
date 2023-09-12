import UIInputFile from './UIInputFile.vue';
import UIInputField from '@/components/UIInput/UIInputField/UIInputField.vue';

import { listSize } from '@/shared/types/size.type';

import type { ArgTypes, Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: 'Formulario/UIInputFile',
  component: UIInputFile,
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
      defaultValue: { summary: '[]' },
      table: {
        type: {
          summary: 'File',
        },
      },
      control: { type: 'object' },
    },
    accept: {
      description: 'Array of string that defines the file types the file input should accept.',
      defaultValue: { summary: '[]' },
      table: {
        type: {
          summary: 'string[]',
        },
      },
      control: { type: 'object' },
    },
    placeholder: {
      description: 'Provides a brief hint to the user as to what kind of information is expected in the field',
      defaultValue: { summary: 'No se ha seleccionado ningun fichero' },
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    addText: {
      description: 'Provides the text button when a unique file can be selected',
      defaultValue: { summary: 'Selecciona un fichero' },
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    addMultipleText: {
      description: 'Provides the text button when multiple files can be selected',
      defaultValue: { summary: 'Selecciona ficheros' },
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    fileUnitText: {
      description: 'Provides the unit name that shows when a file is selected',
      defaultValue: { summary: 'ficheros' },
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
    multiple: {
      description: 'Specifies that the file input allows the user to select more than one file.',
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
    modelValue: [] as File[],
    accept: [],
    placeholder: 'No se ha seleccionado ningun fichero',
    addText: 'Selecciona un fichero',
    addMultipleText: 'Selecciona ficheros',
    fileUnitText: 'ficheros',
    size: 'md',
    disabled: false,
    multiple: false,
    required: false,
  },
  render: args => ({
    components: { UIInputFile },
    setup() {
      return { args };
    },
    template:  `
      <UIInputFile v-bind="args" v-model:model-value="args.modelValue" />
    `,
  }),
} satisfies Meta<typeof UIInputFile>;

export default meta;
type Story = StoryObj<typeof UIInputFile>;

export const Default: Story = {};

export const AcceptPhotos: Story = {
  args: {
    multiple: true,
    placeholder: 'No se ha seleccionado ninguna imagen',
    addText: 'Seleccionar fotos',
    fileUnitText: 'imagenes',
    accept: ['.jpg', '.png', '.gif'],
  },
};

export const Multiple: Story = {
  args: {
    multiple: true,
  },
};

export const SizeSmMultiple: Story = {
  args: {
    multiple: true,
    size: 'sm',
  },
};

export const SizeMdMultiple: Story = {
  args: {
    multiple: true,
    size: 'md',
  },
};

export const SizeLgMultiple: Story = {
  args: {
    multiple: true,
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
    components: { UIInputFile, UIInputField },
    setup() {
      return { UIInputFile, UIInputField, args };
    },
    template: `
      <UIInputField label="Text label">
        <template #default="{id}">
          <UIInputFile v-bind="args" v-model:model-value="args.modelValue" :id="id" />
        </template>
      </UIInputField>
    `,
  }),
};

export const FieldLabelHidden: Story = {
  render: args => ({
    components: { UIInputFile, UIInputField },
    setup() {
      return { UIInputFile, UIInputField, args };
    },
    template: `
      <UIInputField labelHidden>
        <template #default="{id}">
          <UIInputFile v-bind="args" v-model:model-value="args.modelValue" :id="id" />
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
    components: { UIInputFile, UIInputField },
    setup() {
      return { UIInputFile, UIInputField, args };
    },
    template: `
      <UIInputField label="Text label" required>
        <template #default="{id}">
          <UIInputFile v-bind="args" v-model:model-value="args.modelValue" :id="id" />
        </template>
      </UIInputField>
    `,
  }),
};

export const Success: Story = {
  render: args => ({
    components: { UIInputFile, UIInputField },
    setup() {
      return { UIInputFile, UIInputField, args };
    },
    template: `
      <UIInputField label="Text label" success>
        <template #default="{id}">
          <UIInputFile v-bind="args" v-model:model-value="args.modelValue" :id="id" />
        </template>
      </UIInputField>
    `,
  }),
};

export const Error: Story = {
  render: args => ({
    components: { UIInputFile, UIInputField },
    setup() {
      return { UIInputFile, UIInputField, args };
    },
    template: `
      <UIInputField label="Text label" error errorText="This is the error text">
        <template #default="{id}">
          <UIInputFile v-bind="args" v-model:model-value="args.modelValue" :id="id" />
        </template>
      </UIInputField>
    `,
  }),
};

export const Hint: Story = {
  render: args => ({
    components: { UIInputFile, UIInputField },
    setup() {
      return { UIInputFile, UIInputField, args };
    },
    template: `
      <UIInputField label="Text label" hintText="This is a hint text">
        <template #default="{id}">
          <UIInputFile v-bind="args" v-model:model-value="args.modelValue" :id="id" />
        </template>
      </UIInputField>
    `,
  }),
};