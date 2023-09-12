import UIMenu from './UIMenu.vue';
import UIButton from '@/components/UIButton/UIButton.vue';

import type { ArgTypes, Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: 'Components/UIMenu',
  component: UIMenu,
  argTypes: {
    fixed: {
      description: 'Moves the activator to the absolute position defined with the props top, bottom, right and left',
      table: { type: { summary: 'boolean' } },
      defaultValue: { summary: 'false' },
      control: { type: 'boolean' },
    },
    top: {
      description: 'Defines the position for the activator from the top of the screen. Number in rem',
      table: {
        type: { summary: 'rem', detail: 'number' },
      },
      control: { type: 'text' },
    },
    bottom: {
      description: 'Defines the position for the activator from the bottom of the screen. Number in rem',
      table: {
        type: { summary: 'rem', detail: 'number' },
      },
      control: { type: 'text' },
    },
    left: {
      description: 'Defines the position for the activator from the left of the screen. Number in rem',
      table: {
        type: { summary: 'rem', detail: 'number' },
      },
      control: { type: 'text' },
    },
    right: {
      description: 'Defines the position for the activator from the right of the screen. Number in rem',
      table: {
        type: { summary: 'rem', detail: 'number' },
      },
      control: { type: 'text' },
    },
  } as ArgTypes,
  args: {
    fixed: false,
  },
  render: args => ({
    components: { UIMenu, UIButton },
    setup() {
      return { args };
    },
    template:  `
      <UIMenu v-bind="args">
        <template #activator="{toggle}">
          <UIButton text="abrir/cerrar" theme="solid" color="primary" @clicked="toggle" />
        </template>
        <ul>
          <li>contenido de ejemplo</li>
          <li>contenido de ejemplo con texto más largo y que puede llegar a crecer mas de lo esperado</li>
          <li>contenido de ejemplo</li>
          <li>contenido de ejemplo</li>
          <li>contenido de ejemplo</li>
        </ul>
      </UIMenu>
    `,
  }),
} satisfies Meta<typeof UIMenu>;

export default meta;
type Story = StoryObj<typeof UIMenu>;

export const Default: Story = {};

export const Fixed: Story = {
  args: {
    fixed: true,
    bottom: '1',
    right: '1',
  },
  render: args => ({
    components: { UIMenu, UIButton },
    setup() {
      return { args };
    },
    template:  `
      <UIMenu v-bind="args">
        <template #activator="{toggle}">
          <UIButton text="Menu Fixed" theme="solid" color="primary" @clicked="toggle" />
        </template>
        <ul>
          <li>contenido de ejemplo</li>
          <li>contenido de ejemplo con texto más largo y que puede llegar a crecer mas de lo esperado</li>
          <li>contenido de ejemplo</li>
          <li>contenido de ejemplo</li>
          <li>contenido de ejemplo</li>
        </ul>
      </UIMenu>
    `,
  }),
};