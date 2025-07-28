import type { StorybookConfig } from '@storybook/vue3-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    '../src/docs/Introduction.mdx',
    '../src/docs/*.mdx',
    '../src/docs/**/*.mdx',
    '../src/components/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
  ],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {},
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['storybook-dark-mode'],
        esbuildOptions: {
          target: 'esnext',
        },
      },
    });
  },
};
export default config;
