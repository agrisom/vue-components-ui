module.exports = {
  "stories": [
    "../src/lib-components/*.stories.mdx",
    "../src/lib-components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/vue3"
}