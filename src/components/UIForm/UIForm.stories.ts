import ExampleForm from './ExampleForm.vue';

import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: 'Formulario/UIForm',
  component: ExampleForm,
} satisfies Meta<typeof ExampleForm>;

export default meta;
type Story = StoryObj<typeof ExampleForm>;

export const Default: Story = {};