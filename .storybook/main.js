var path = require('path');
module.exports = {
  "stories": [
    "../src/lib-components/*.stories.mdx",
    "../src/lib-components/**/*.stories.@(js|jsx|ts|tsx)"
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
    });
    // pug loader
    config.module.rules.push(
      {
        test: /\.pug$/,
        use: [
          { loader: 'pug-plain-loader' }
        ]
      }
    );
    config.resolve.alias = {
      ...config.resolve.alias,
      "Shared": path.resolve(__dirname, "../src/shared"),
      "@": path.resolve(__dirname, "../src"),
    };
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
  "framework": "@storybook/vue3"
}