![agrisom](https://avatars.githubusercontent.com/u/53232793?v=4)

# Welcome to Vue Components UI

This is a Vue component library that will contain all components you need to start a new Vue project. Components are written with Vue 3, TS, Pug, SASS and fully configurable using props, slots, and css variables.

> I'm now developing a new site where you will found documentation for every component along with a playground and testing tools

---

## Installation
**Using npm**
```
npm install vue-components-ui --save
```

## Usage
```
<template lang="pug">
UILabel(text="Hello world from UILabel")
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { UILabel } from 'vue-components-ui';

export default defineComponent({
  name: 'Component',
  components: {
    UILabel,
  },
});
</script>
```

## Repository
Check out the code on github, [agrisom/vue-components-ui](https://github.com/agrisom/vue-components-ui)

## Documentation
Under construction, [agrisom/vue-components-docs](https://github.com/agrisom/vue-components-docs)

---

## Changelog
All notable changes to this project will be documented in this file.
### [0.0.3] - 2022-02-17
- Readme file created
- Adds Storybook

### [0.0.2] - 2022-02-08
- Adds UILabel for testing purposes
- First publish on npm

### [0.0.1] - 2022-02-08
- Init library