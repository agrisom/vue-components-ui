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

- Styling components

Add this file to your project and override the global variables to create your own color palette. [lib-components.scss](https://github.com/agrisom/vue-components-ui/blob/master/src/shared/style/lib-components.scss)

```
@use "sass:map";
@use "sass:list";

$lightness-variation: ( 1: 35%, 2: 25%, 3: 10%, 4: 0%, 5: -5%, 6: -10%, 7: -15%, 8: -25%, 9: -35% );

$palette: (
  "grey": ( "h": 0, "s": 0%, "l": 50% ),
  "primary": ( "h": 224, "s": 52%, "l": 56% ),
  "secondary": ( "h": 0, "s": 58%, "l": 46% ),
  "success": ( "h": 125, "s": 40%, "l": 50% ),
  "warning": ( "h": 28, "s": 100%, "l": 50% ),
  "error": ( "h": 0, "s": 90%, "l": 45% ),
);

@mixin build-colors {
  @each $color-name, $color-value in $palette {
    --ui-global-color-#{$color-name}--000: hsl(#{map.get($color-value, "h")} #{map.get($color-value, "s")} 95%);
    @for $var from 1 through 9 {
      $lightness: calc(#{map.get($color-value, "l")} + #{map.get($lightness-variation, $var)});
      --ui-global-color-#{$color-name}--#{$var}00: hsl(#{map.get($color-value, "h")} #{map.get($color-value, "s")} #{$lightness});
    }
  }
}

:root {
  --ui-global-gutter: 0.25rem;
  --ui-global-color-black: hsl(0, 0%, 15%);
  @include build-colors;
}
```

- Color utilities

Color palette is based on hsl so you can create a function to play with transparency, with no need to charge :root with more variables

```
@function color-transparency($color-name, $alpha: 0.5) {
  $color-value: map.get($palette, $color-name);
  @if $color-value {
    @return hsla(map.get($color-value, "h"), map.get($color-value, "s"), map.get($color-value, "l"), $alpha);
  } @else {
    @return hsla(0, 0%, 0%, $alpha);
  }
}

.my-component {
  background-color: color-transparency("secondary", 0.1);
}
```

## Repository
Check out the code on github, [agrisom/vue-components-ui](https://github.com/agrisom/vue-components-ui)

## Documentation
All components are testable and documented with storybook.

A version of storybook is publish via netlify. There you will found documentation for every component along with a playground and testing tools
[documentation](https://vue-components-ui.netlify.app)

## Changelog
All notable changes to this project will be documented in this file.

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