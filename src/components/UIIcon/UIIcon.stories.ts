import UIIcon from './UIIcon.vue';
import { listIcon } from '@/shared/types/icon.type';
import { listSizeX } from '@/shared/types/size.type';

import type { ArgTypes, Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: 'Components/UIIcon',
  component: UIIcon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      description: 'The #id to the icon from your <code>sprite-icons.svg</code> that needs to be duplicated',
      options: listIcon,
      table: {
        type: { summary: 'Icon | string' },
      },
      control: { type: 'select' },
    },
    description: {
      description: 'Provides an accessible, long-text description of the SVG. The attribute <code>desc</code> will be the same as name if not defined',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: { type: 'text' },
    },
    size: {
      description: 'The displayed width/height predefined for the rectangular viewport',
      options: listSizeX,
      defaultValue: { summary: 'md' },
      table: {
        type: {
          summary: 'SizeX',
          detail: '"xs" => (12px) | "sm" => (16px) | "md" => (24px) | "lg" => (36px) | "xl" => (48px)',
        },
      },
      control: { type: 'select' },
    },
  } as ArgTypes,
  args: { name: 'home', description: 'Accessible long-text description of the SVG', size: 'md' },
} satisfies Meta<typeof UIIcon>;

export default meta;
type Story = StoryObj<typeof UIIcon>;

export const Default: Story = {};

export const SizeXs: Story = {
  args: {
    size: 'xs',
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

export const SizeXl: Story = {
  args: {
    size: 'xl',
  },
};

export const CustomColor: Story = {
  decorators: [
    story => ({
      components: { story },
      template: `
        <story class="color--error" />
      `,
    }),
  ],
};

export const AllIcons: Story = {
  decorators: [
    () => ({
      components: { UIIcon },
      setup() {
        return { listIcon };
      },
      template: `
        <div class="flex">
          <div v-for="icon in listIcon" style="min-width: 10rem; min-height: 5rem;" class="flex flex--column flex--center flex--nowrap">
            <UIIcon :name="icon" />
            {{icon}}
          </div>
        </div>
      `,
    }),
  ],
};