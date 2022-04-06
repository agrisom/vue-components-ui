const {resolve} = require("path");
module.exports = {
  "stories": [
    "../src/lib-components/*.stories.mdx",
    "../src/lib-components/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  async viteFinal(config, { configType }) {
    config.resolve.extensions = ['.mjs', '.mdx', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.sass'];
    config.resolve.alias = {
      '@': resolve(__dirname, '../src'),
      vue: "vue/dist/vue.esm-bundler.js",
    };
    return config;
  },
}