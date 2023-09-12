<script setup lang="ts">
import { computed } from 'vue';

import type { Color } from '@/shared/types/color.type';
import type { RouteLocationRaw } from 'vue-router';
import type { Icon } from '@/shared/types/icon.type';

import UIButton from '@/components/UIButton/UIButton.vue';

const props = withDefaults(defineProps<{
  title: string;
  detail?: string;
  route?: { to: RouteLocationRaw; title?: string; icon?: Icon };
  severity?: Color;
  delay?: number;
  closeButton?: boolean;
}>(), {
  detail: undefined,
  route: undefined,
  severity: 'default',
  delay: 5000,
  closeButton: true,
});

const emit = defineEmits<{
  (e: 'delete'): void;
}>();

const isExternalLink = computed(() => props.route && typeof props.route.to === 'string' && (props.route.to.startsWith('http://') || props.route.to.startsWith('https://')));

let paused = props.delay === 0;
let timeLeft = +props.delay;
let closed = false;

function close() {
  closed = true;
  emit('delete');
}

function countDown() {
  setTimeout(() => {
    if (!paused) {
      timeLeft -= 1000;
      if (timeLeft <= 0) {
        close();
        return;
      }
    }
    if (!closed) {
      countDown();
    }
  }, 1000);
}

function resetPause() {
  paused = false;
  timeLeft = props.delay ? +props.delay : 5000;
}

countDown();
</script>

<template>
  <div
    :class="['ui-alert', 'ui-alert--severity-' + severity]"
    @mouseenter="paused = true"
    @mouseleave="resetPause"
  >
    <div class="ui-alert__content">
      <span class="heading--h5">{{ title }}</span>
      <span
        v-if="detail"
        class="ui-alert__detail"
      >{{ detail }}</span>
    </div>
    <div class="ui-alert__actions">
      <slot
        name="actions"
        :close="close"
      >
        <UIButton
          v-if="route"
          class="ui-alert__href"
          :text="route.title"
          theme="outline"
          color="warning"
          :icon="route.icon ?? (isExternalLink ? 'travel-explore' : 'eye')"
          :to="isExternalLink ? undefined : route.to"
          :href="isExternalLink ? route.to as string : undefined"
          size="sm"
          reverse-order
          @clicked="close"
        />
        <UIButton
          v-if="closeButton"
          class="ml-4"
          theme="solid"
          :color="severity"
          icon="close"
          size="sm"
          @clicked="close"
        />
      </slot>
    </div>
  </div>
</template>

<style lang="scss">
.ui-alert {
  --ui-alert-bgcolor: var(--ui-color-grey--80);
  --ui-alert-border-color: var(--ui-color-grey--90);
  display: flex;
  gap: variables.$gutter;
  color: var(--ui-color-white);
  padding: variables.$gutter*3 variables.$gutter*4;
  border-left: variables.$gutter*1.5 solid;
  border-radius: 4px;
  background: var(--ui-alert-bgcolor);
  border-color: var(--ui-alert-border-color);

  &__actions {
    float: right;
    display: flex;
    gap: variables.$gutter*2;
    margin: auto;
  }

  &__content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: variables.$gutter;
  }

  &__href {
    text-transform: none;
  }

  &--severity {
    &-default {
      --ui-alert-bgcolor: var(--ui-color-grey--70);
      --ui-alert-border-color: var(--ui-color-grey--50);
    }

    &-primary {
      --ui-alert-bgcolor: var(--ui-color-primary--30);
      --ui-alert-border-color: var(--ui-color-primary--20);
    }

    &-secondary {
      --ui-alert-bgcolor: var(--ui-color-secondary--30);
      --ui-alert-border-color: var(--ui-color-secondary--20);
    }

    &-success {
      --ui-alert-bgcolor: var(--ui-color-success--40);
      --ui-alert-border-color: var(--ui-color-success--30);
    }

    &-warning {
      --ui-alert-bgcolor: var(--ui-color-warning--40);
      --ui-alert-border-color: var(--ui-color-warning--30);
    }

    &-error {
      --ui-alert-bgcolor: var(--ui-color-error--40);
      --ui-alert-border-color: var(--ui-color-error--30);
    }
  }
}
</style>