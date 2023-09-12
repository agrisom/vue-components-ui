import UIFab from './UIFab.vue';
import UIIcon from '@/components/UIIcon/UIIcon.vue';

import type { ArgTypes, Meta, StoryObj } from '@storybook/vue3';
import type { FabItem } from './UIFab.types';

const fabOptions: FabItem[] = [
  {
    text: 'Nueva Cita',
    icon: 'add',
    value: 'newCite',
    show: true,
  },
  {
    text: 'Nueva Tarea',
    icon: 'add',
    value: 'newTask',
    show: true,
  },
  {
    text: 'Buscar tarea',
    icon: 'search',
    value: 'searchTask',
  },
  {
    text: 'Agendar',
    icon: 'calendar',
    value: 'schedule',
  },
  {
    text: 'Acción con texto más largo de lo normal',
    icon: 'store',
    value: 'longText',
  },
];

const meta = {
  title: 'Components/UIFab',
  component: UIFab,
  argTypes: {
    actions: {
      description: 'List of available options',
      defaultValue: { summary: '[]' },
      table: {
        type: {
          summary: 'FabItem',
          detail: `
            {
              text: string;
              icon: Icon;
              value: string;
              show?: boolean;
              color?: Color;
            }
          `,
        },
      },
      control: { type: 'object' },
    },
    compactView: {
      description: 'When it\'s set to true all options are only visible on the content menu',
      table: { type: { summary: 'boolean' } },
      defaultValue: { summary: 'false' },
      control: { type: 'boolean' },
    },
  } as ArgTypes,
  args: {
    actions: fabOptions,
    compactView: false,
  },
  decorators: [
    story => ({
      components: { story, UIIcon },
      setup() {
        return { story, UIIcon };
      },
      template: `
        <UIIcon name="info" size="sm" />
        <span> The component is showed on bottom right of the screen</span>
        <story />
      `,
    }),
  ],
} satisfies Meta<typeof UIFab>;

export default meta;
type Story = StoryObj<typeof UIFab>;

export const Default: Story = {};