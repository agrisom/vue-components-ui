![agrisom](https://avatars.githubusercontent.com/u/53232793?v=4)

# Welcome to Vue Components UI

This is a Vue component library that will contain all components you need to start a new Vue project. Components are written with Vue 3, TS, Pug, SCSS and fully configurable using props, slots, and css variables.

> This library is currently under construction. I'll be publishing new components as son as they are ready for use

## How it works

- [x] Build tool [Vite](https://vitejs.dev/)
- [x] Framework [Vue 3](https://vuejs.org/)
- [x] Type system [TypeScript](https://www.typescriptlang.org/) / [Vue tsc](https://github.com/johnsoncodehk/volar/tree/master/packages/vue-tsc)
- [x] SFC Setup [vue-sfc-rollup](https://www.npmjs.com/package/vue-sfc-rollup)
- [x] Vue Composition API [SFC script setup](https://vuejs.org/api/sfc-script-setup.html)
- [x] Router [Vue router](https://router.vuejs.org/)
- [x] Styling [SCSS](https://sass-lang.com/)
- [x] Publish repository [npm](https://www.npmjs.com/package/vue-components-ui)
- [x] Documentation [storybook](https://storybook.js.org/)

## Installation

**Using npm**
```
npm install vue-components-ui
```

## Usage
- Declare components globaly **main.ts**

```
import vueComponentsUi from 'vue-components-ui';

const app = createApp(App);
vueComponentsUi(app);
```

- Declare as component

```
<template lang="pug">
UIIcon(name="home")
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { UIIcon } from 'vue-components-ui';

export default defineComponent({
  name: 'MyComponent',
  components: {
    UIIcon,
  },
});
</script>
```

## Repository
Check out the code on github, [agrisom/vue-components-ui](https://github.com/agrisom/vue-components-ui)

## Documentation
All components are testable and documented with storybook.

A version of storybook is publish via netlify. There you will found documentation for every component along with a playground and testing tools
[documentation](https://vue-components-ui.netlify.app)

## Changelog
All notable changes to this project will be documented in this file.

### [0.1.2] - 2022-03-26
- Creates UIButton component
- Complements storybook controls
- Changed pug templates to html due to a bug that throws error when v-else

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