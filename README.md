[![agrisom](/agrisom-logo-min.svg "agrisom")](https://github.com/agrisom)

# Welcome to Vue Components UI

This is a Vue component library that will contain all components you need to start a new Vue project. Components are written with Vue 3, TS, HTML, SCSS and fully configurable using props, slots, and css variables. This library is based on my public project [Vue library demo](https://github.com/agrisom/agrisom-vue-component-library-demo)

> This library is currently under construction. I'll be publishing new components as son as they are ready for use

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

## Installation

**Using npm**

`npm install --save-dev vue-components-ui`

**Import an especific version**

`npm install --save-dev vue-components-ui#0.2.1`

## Import styles

We must import the css file on the main file where the Vue app is created.

**app.ts**

```
import 'vue-components-ui/style.css';
```

## Usage

Once installed we can use the library.
For this we import them individally on demand so the components are loaded to the browser as son as they are used for the firs time and allows Vue and vite to exclude unused components from the final compilation.

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

## Repository

Check out the code on github, [agrisom/vue-components-ui](https://github.com/agrisom/vue-components-ui)

## Documentation

All components are testable and documented with storybook.

A version of storybook is publish via netlify. There you will found documentation for every component along with a playground and testing tools

[documentation](https://vue-components-ui.netlify.app)

## Changelog

All notable changes to this project will be documented in this file.

### [0.2.0] - 2023-04-10
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