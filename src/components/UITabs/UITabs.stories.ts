import UITabs from './UITabs.vue';
import UIBadge from '@/components/UIBadge/UIBadge.vue';

import type { ArgTypes, Meta, StoryObj } from '@storybook/vue3';
import type { TabHeader } from './UITabs.types';

const tabHeaders: readonly TabHeader[] = [
  { text: 'pestaña texto largo', value: 'tab1' },
  { text: 'pestaña 2', value: 'tab2', icon: 'home' },
  { text: 'pestaña 3', value: 'tab3' },
  { text: 'pestaña 4', value: 'tab4' },
  { text: 'pestaña 5', value: 'tab5', icon: 'home', disabled: true },
] as const;

const meta = {
  title: 'Components/UITabs',
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  component: UITabs,
  argTypes: {
    headers: {
      description: 'List of available tabs',
      defaultValue: { summary: '[]' },
      table: {
        type: {
          summary: 'TabHeader[]',
          detail: `
            {
              text: string;
              value: string;
              disabled?: boolean;
              icon?: Icon;
            }
          `,
        },
      },
      control: { type: 'object' },
    },
    active: {
      description: 'Id of the active tab',
      table: { type: { summary: 'string' } },
      defaultValue: { summary: '' },
      control: { type: 'text' },
    },
    height: {
      description: 'The displayed height for the component',
      defaultValue: { summary: 'auto' },
      control: { type: 'text' },
    },
    minHeight: {
      description: 'The minimum height for the component',
      defaultValue: { summary: '50px' },
      control: { type: 'text' },
    },
  } as ArgTypes,
  args: {
    headers: tabHeaders,
    active: 'tab1',
    height: 'auto',
    minHeight: '50px',
  },
  render: args => ({
    components: { UITabs, UIBadge },
    setup() {
      return { args };
    },
    template: `
      <UITabs v-bind="args" v-model:active="args.active">
        <template #headerextra>
          <button>header extra</button>
        </template>
        <template #tab3-tab-append>
          <UIBadge class="ml-2" text="2" circle />
        </template>
        <template #append-all-tabs="{ header }">
          <b style="margin-left: 5px">↵</b>
        </template>
        <template #tab1-content>
          <div>
            <h1>Ejemplo uso de slots</h1>
            <pre>
              &lt;UITabs v-bind="args" v-model:active="args.active"&gt;
                &lt;template #headerextra&gt;
                  &lt;button&gt;header extra&lt;/button&gt;
                &lt;/template&gt;
                &lt;template #tab3-tab-append&gt;
                  &lt;UIBadge class="ml-2" text="2" circle /&gt;
                &lt;/template&gt;
                &lt;template #tab1-content&gt;
                  &lt;p&gt;Texto content&lt;/p&gt;
                &lt;/template&gt;
                &lt;template #tab2-content&gt;
                  &lt;p&gt;item tab2 content&lt;/p&gt;
                  &lt;p&gt;múltiples lineas para pruebas de scroll&lt;/p&gt;
                  &lt;p&gt;múltiples lineas&lt;/p&gt;
                  &lt;p&gt;múltiples lineas&lt;/p&gt;
                  &lt;p&gt;múltiples lineas&lt;/p&gt;
                  &lt;p&gt;múltiples lineas&lt;/p&gt;
                  &lt;p&gt;múltiples lineas&lt;/p&gt;
                  &lt;p&gt;múltiples lineas&lt;/p&gt;
                  &lt;p&gt;múltiples lineas&lt;/p&gt;
                &lt;/template&gt;
                &lt;template #tab3-content&gt;
                  &lt;p&gt;item tab3 content&lt;/p&gt;
                &lt;/template&gt;
                &lt;template #tab4-content&gt;
                  &lt;p&gt;item tab4 content&lt;/p&gt;
                &lt;/template&gt;
                &lt;template #tab5-content&gt;
                  &lt;p&gt;item tab5 disabled content&lt;/p&gt;
                &lt;/template&gt;
                &lt;template #append-all-tabs="{ header }"&gt;
                  &lt;b style="margin-left: 5px"&gt;↵&lt;/b&gt;
                &lt;/template&gt;
              &lt;/UITabs&gt;
            </pre>
          </div>
        </template>
        <template #tab2-content>
          <p>item tab2 content</p>
          <p>múltiples lineas para pruebas de scroll</p>
          <p>múltiples lineas</p>
          <p>múltiples lineas</p>
          <p>múltiples lineas</p>
          <p>múltiples lineas</p>
          <p>múltiples lineas</p>
          <p>múltiples lineas</p>
          <p>múltiples lineas</p>
        </template>
        <template #tab3-content>
          <p>item tab3 content</p>
        </template>
        <template #tab4-content>
          <p>item tab4 content</p>
        </template>
        <template #tab5-content>
          <p>item tab5 disabled content</p>
        </template>
      </UITabs>
    `,
  }),
} satisfies Meta<typeof UITabs>;

export default meta;
type Story = StoryObj<typeof UITabs>;

export const Default: Story = {};