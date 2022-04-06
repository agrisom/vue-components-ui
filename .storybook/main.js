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
    return {
      ...config,
      css: {
        preprocessorOptions: {
          scss: { additionalData: `@import \'@/shared/style/lib-components.scss\';` },
        },
      },
      resolve: {
        extensions: ['.mjs', '.mdx', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.scss', '.sass'],
        alias: {
          '@': resolve(__dirname, '../src'),
          vue: "vue/dist/vue.esm-bundler.js",
        }
      }
    };
  },
}