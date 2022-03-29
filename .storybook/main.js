const path = require('path');
module.exports = {
  "stories": [
    "../src/lib-components/*.stories.mdx",
    "../src/lib-components/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, { configType }) => {
    // Style loader
    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../src')
    });
    config.resolve.extensions.push('.ts', '.tsx', '.js');
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    };
    config.resolve.modules.push(path.resolve(__dirname, "../src"));

    return config;
  },
  "framework": "@storybook/vue3"
}