import UIAlert from './UIAlert.vue';
import { listColor } from '@/shared/types/color.type';

import type { ArgTypes, Meta, StoryObj } from '@storybook/vue3';
import { RouteLocationRaw } from 'vue-router';

const meta = {
  title: 'Components/UIAlert',
  tags: ['autodocs'],
  component: UIAlert,
  argTypes: {
    title: {
      description: 'Text displayed as title',
      table: {
        type: { summary: 'string' },
      },
      control: { type: 'text' },
    },
    detail: {
      description: 'Text displayed as detail',
      table: {
        type: { summary: 'string' },
      },
      control: { type: 'text' },
    },
    routeTo: {
      description: 'Vue router-link. Denotes the target route of the link. When clicked, the value of the to prop will be passed to router.push() internally',
      table: {
        type: { summary: 'RouteLocationRaw', detail: 'Example => :to="{name: \'Home\'}"' },
      },
      control: { type: 'object' },
    },
    routeTitle: {
      description: 'Text for the link button',
      table: {
        type: { summary: 'string' },
      },
      control: { type: 'text' },
    },
    severity: {
      description: 'Color from the defined palette',
      options: listColor,
      defaultValue: { summary: 'default' },
      table: {
        type: {
          summary: 'Color',
          detail: '"default" | "primary" | "secondary" | "success" | "warning" | "error"',
        },
      },
      control: { type: 'select' },
    },
    delay: {
      description: 'Text displayed which the shown initials are split',
      defaultValue: { summary: '5000' },
      table: {
        type: { summary: 'number' },
      },
      control: { type: 'number' },
    },
    closeButton: {
      description: 'Adds a close button that removes the element',
      defaultValue: { summary: 'true' },
      table: {
        type: {
          summary: 'boolean',
        },
      },
      control: { type: 'boolean' },
    },
  } as ArgTypes,
  args: {
    title: 'Notification title',
    detail: 'This is a detail text',
    severity: 'default',
    delay: 5000,
    closeButton: true,
  },
} satisfies Meta<typeof UIAlert>;

export default meta;
type Story = StoryObj<typeof UIAlert>;

export const Default: Story = {};

export const NoDetail: Story = {
  args: {
    detail: undefined,
  },
};

export const SeveritySuccess: Story = {
  args: {
    severity: 'success',
  },
};

export const SeverityWarning: Story = {
  args: {
    severity: 'warning',
  },
};

export const SeverityError: Story = {
  args: {
    severity: 'error',
  },
};

export const NoCloseButton: Story = {
  args: {
    closeButton: false,
  },
};

export const InteractiveVueRoute: Story = {
  args: {
    route: {
      to: {
        name: 'Home',
      } as RouteLocationRaw,
      title: 'See',
      icon: 'eye',
    },
  },
};

export const InteractiveLink: Story = {
  args: {
    route: {
      to: 'http://google.com',
      title: 'Go to link',
      icon: 'travel-explore',
    },
  },
};