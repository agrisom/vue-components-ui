const { resolve } = require('path');

module.exports = {
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, "src")
    };
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', {
        loader: "sass-loader",
        options: {
          additionalData: content => {
            const LF = '\n';
            const paths = ['@use \'sass:math\';', '@use \'@/shared/style/style.scss\';', '@use \'@/shared/style/utils/_functions.scss\';'];
            return paths.join(LF) + LF + content;
          },
          implementation: require('sass')
        }
      }],
      include: resolve(__dirname, '../')
    });
    return config;
  },
  "stories": ["../src/docs/Introduction.stories.mdx", "../src/docs/*.mdx", "../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "storybook-addon-sass-postcss"],
  "framework": {
    "name": "@storybook/vue3-vite",
    "options": {}
  },
  "docs": {
    "autodocs": "tag"
  }
};