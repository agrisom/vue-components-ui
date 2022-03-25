import { reactive } from 'vue';
import UIInputText from './UIInputText.vue';

export default {
  title: 'Components (test)/Forms/UIInputText',
  component: UIInputText,
  argTypes: {
    type: {
      description: 'Type of form control.',
      options: ['text', 'password', 'email', 'url', 'search', 'tel', 'color', 'hidden'],
      table: {
        type: {
          summary: 'UIInputTextType',
          detail: '\'search\' | \'text\' | \'password\' | \'email\' | \'url\' | \'tel\' | \'color\' | \'hidden\''
        },
      },
      control: { type: 'select' },
    },
    name: {
      name: 'name',
      description: 'Name of the form control. Submitted with the form as part of a name/value pair.',
      control: {
        type: 'text'
      }
    },
    label: {
      description: 'Defines a caption for the input.'
    },
    modelValue: {
      description: 'Value of the control.'
    },
    placeholder: {
      description: 'Text that appears in the form control when it has no value set.'
    },
    autocomplete: {
      description: 'Hint for form autofill feature.',
      table: {
        type: {
          summary: 'UIInputTextAutocomplete',
          detail: '\'on\' | \'off\' | string'
        },
      },
      control: { type: 'text' },
    },
    enterKeyHint: {
      description: 'Defines what action label (or icon) to present for the enter key on virtual keyboards.',
      options: [undefined, 'enter', 'done', 'go', 'next', 'previous', 'search', 'send'],
      table: {
        type: {
          summary: 'UIInputTextEnterKeyHint',
          detail: 'undefined, \'enter\', \'done\', \'go\', \'next\', \'previous\', \'search\', \'send\''
        },
      },
      control: { type: 'select' },
    },
    labelHidden: {
      description: 'Hides the label, but is still accessible by a screen reader.'
    },
    disabled: {
      description: 'Whether the form control is disabled.'
    },
    required: {
      description: 'A value is required or must be check for the form to be submittable.'
    },
    block: {
      description: 'Makes the field fill all available horizontal space'
    }
  },
  parameters: { controls: { sort: 'requiredFirst', expanded: true } },
};

const Template = (args) => ({
  components: { UIInputText },
  setup() {
    return { args: reactive(args) };
  },
  template: '<UIInputText v-bind="args" v-model="args.modelValue" />',
});

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  name: 'inp_default',
  label: 'Label text',
  modelValue: '',
  placeholder: 'Placeholder',
  autocomplete: 'off',
  enterKeyHint: undefined,
  labelHidden: false,
  disabled: false,
  required: false,
  block: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  name: 'inp__disabled',
  disabled: true,
};
