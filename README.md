<a href="https://github.com/agrisom" target="_blank">
  <img src="public/agrisom-logo-min.svg" alt="agrisom" style={{height: 40 + 'vh'}} />
</a>

[![Total Downloads](https://img.shields.io/npm/dt/vue-components-ui.svg)](https://www.npmjs.com/package/vue-components-ui)
[![Latest Release](https://img.shields.io/npm/v/vue-components-ui.svg)](https://www.npmjs.com/package/vue-components-ui?activeTab=versions)
[![License](https://img.shields.io/npm/l/vue-components-ui.svg)](https://github.com/agrisom/vue-components-ui/blob/master/LICENSE)

# Welcome to Vue Components UI

Welcome to **Vue Components UI** – The ultimate library of customizable components designed to elevate your Vue projects to the next level!

This library contains everything you need to create an amazing Vue project in no time. All of the components are built using the latest technologies including Vue 3 (Script setup), Typescript, HTML and SCSS, making them the most consistent and reliable components available. With type checking, our components are designed to catch errors, save time and improve the quality of your code. Also the rollup offers optimizations like tree shaking to remove any component that hasn't been used.
All components are fully customizable and use props and slots to personalize every detail, while CSS variables help create unique styles that match your project's needs. 

With Typescript, you can use extensions such as Volar and ESLint to autocomplete props, check errors, and more.

> This library is currently under construction, but we'll be releasing new components as soon as they're tested and ready for use.

## How it works

- [x] Build tool [Vite](https://vitejs.dev/)
- [x] Framework [Vue 3](https://vuejs.org/)
- [x] Type system [TypeScript](https://www.typescriptlang.org/) / [Vue tsc](https://github.com/vuejs/language-tools)
- [x] Build plugin [typescript2](https://github.com/ezolenko/rollup-plugin-typescript2)
- [x] Vue script setup [SFC](https://vuejs.org/api/sfc-script-setup.html)
- [x] Router [Vue router](https://router.vuejs.org/)
- [x] Styling [SCSS](https://sass-lang.com/)
- [x] Publish repository [npm](https://www.npmjs.com/package/vue-components-ui)
- [x] Documentation [storybook](https://storybook.js.org/)

## Collaborators

[![agrisom](https://s.gravatar.com/avatar/fca9ce1022597e46e338155fbee56a4d?s=80 "agrisom")](https://github.com/agrisom)

<a href="https://es.linkedin.com/in/albert-griso-mendez" target="_blank">
  <img src="public/linkedin.png" alt="Linkedin - Albert Griso Mendez" />
</a>

## Installation

This library is published to the [npm repository](https://www.npmjs.com/package/vue-components-ui), making the installation process a breeze. Simply add this dependency, import styles and start developing.

### Dependency: npm

Install the latest version:

`npm install --save-dev vue-components-ui`

Or import an especific version:

`npm install --save-dev vue-components-ui#0.1.4`

### Import styles

After installing the dependency, import the CSS file to your main Vue instance or HTML head to use the library's styles.
Customize the look and feel of the components by rewriting the CSS variables to match your project's needs.

**app.ts**

```
import 'vue-components-ui/style.css';
```

## Usage

After completing the installation steps we are ready to use the components.
For this, import them individually on demand. This approach ensures that components are loaded only when needed, minimizing the time it takes to load your page. In addition, Vue and Vite's tree-shaking feature will automatically exclude unused components from the final build.

### Usage example

**Page.vue**

```
<script setup lang="ts">
import { MyComponent } from 'vue-components-ui';
</script>

<template>
  <MyComponent text="My Header" color="green"/>
</template>
```

### Error checking and autocomplete

Using Typescript will not only make implementation easier, but also faster and more efficient, resulting in higher-quality code.
With extensions like Volar and ESLint, developers can easily manage props, catch errors, and even auto-complete code, making the development process more streamlined and efficient.

<img src="public/typescript.gif" alt="typescript" />

## Repository

All the code is public on GitHub, so you can review, learn, and even improve it for your specific needs.

Check out the code on github, [agrisom/vue-components-ui](https://github.com/agrisom/vue-components-ui)

## Documentation

Our **Vue Components UI library** is fully documented and testable with Storybook, a user interface development environment for testing and showcasing interactive components. We've published a version of Storybook on Netlify, where you can access documentation for each component, as well as a playground and testing tools. This way, you can easily see how each component works, test it out for yourself, and integrate it into your Vue projects with confidence.

All components are testable and documented with storybook.

A version of storybook is publish via netlify. There you will found documentation for every component along with a playground and testing tools

[Vue Components UI - Documentation](https://vue-components-ui.netlify.app)

## Changelog

All notable changes to this project will be documented in this file.

### [0.2.2] - 2023-05-10
- Updated documentation and readme notes.
View github [changelog](https://github.com/agrisom/vue-components-ui/compare/V0.2.0...V0.2.2)

### [0.2.0] - 2023-05-08
- This project is reset from the roots to provide better tools and base to allow grow the project.
If you are currently using this repo in your project I recomend you to lock the versión to [0.1.4](https://www.npmjs.com/package/vue-components-ui/v/0.1.4) and open a new task to test and migrate to this new version.
View github [changelog](https://github.com/agrisom/vue-components-ui/compare/V0.1.4...V0.2.0)

### [0.1.4] - 2022-04-06
- Upgraded all package.json dependencies
- Upgraded storybook to 6.4.20
- Storybook builder changed to vite
- Storybook loads lib-components.scss by default
- Simplifies color palette definition
View github [changelog](https://github.com/agrisom/vue-components-ui/compare/V0.1.3...V0.1.4)

### [0.1.3] - 2022-03-29
- UIButton component released
- Dev component UILabel deleted
- Extends storybook controls
View github [changelog](https://github.com/agrisom/vue-components-ui/compare/V0.1.2...V0.1.3)

### [0.1.2] - 2022-03-26
- Creates UIButton component
- Complements storybook controls
- Changed pug templates to html due to a bug that throws error when v-else

View github [changelog](https://github.com/agrisom/vue-components-ui/compare/V0.1.0...V0.1.2)

### [0.1.0] - 2022-03-02
- Creates UIIcon component
- Configures storybook
- Changed defineComponent for `<script setup>`
- Published first documentation [docs](https://vue-components-ui.netlify.app)

View github [changelog](https://github.com/agrisom/vue-components-ui/compare/V0.0.3...V0.1.0)

### [0.0.3] - 2022-02-17
- Readme file created
- Adds Storybook

### [0.0.2] - 2022-02-08
- Adds UILabel for testing purposes
- First publish on npm

### [0.0.1] - 2022-02-08
- Init library