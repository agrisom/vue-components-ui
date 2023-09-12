<script setup lang="ts">
import { computed } from 'vue';
import UIIcon from '@/components/UIIcon/UIIcon.vue';

import type { SizeX } from '@/shared/types/size.type';
import type { Icon } from '@/shared/types/icon.type';
import type { Color } from '@/shared/types/color.type';
import type { BadgePosition } from './UIBadge.types';

const props = withDefaults(defineProps<{
  text?: string;
  icon?: Icon;
  position?: BadgePosition;
  color?: Color;
  size?: SizeX;
  iconSize?: SizeX;
  oflimits?: boolean;
  reverseOrder?: boolean;
  circle?: boolean;
}>(), {
  text: undefined,
  icon: undefined,
  position: 'inline',
  color: 'primary',
  size: 'sm',
  iconSize: undefined,
});

const textOverflow = computed(() => props.text && props.text.length > 2 ? '+99' : props.text);
const iconSizeC = computed(() => props.iconSize ? props.iconSize : props.size);
</script>

<template>
  <div
    :class="['ui-badge', { 'ui-badge--circle': props.circle, 'ui-badge--oflimits': props.oflimits, 'ui-badge--reverse': props.reverseOrder }, 'ui-badge--color-' + props.color, 'ui-badge--position-' + props.position, 'ui-badge--size-' + props.size]"
  >
    <slot>
      <template v-if="props.circle">
        <UIIcon
          v-if="props.icon"
          class="ui-badge__icon"
          :name="props.icon"
          :size="iconSizeC"
        />
        <span
          v-else-if="textOverflow"
          class="ui-badge__text"
        >{{ textOverflow }}</span>
      </template>
      <template v-else>
        <UIIcon
          v-if="props.icon"
          class="ui-badge__icon"
          :name="props.icon"
          :size="iconSizeC"
        />
        <span
          v-if="props.text"
          class="ui-badge__text"
        >{{ props.text }}</span>
      </template>
    </slot>
  </div>
</template>

<style lang="scss">
.ui-badge {
  --ui-badge-color: var(--ui-color-white);
  --ui-badge-bg-color: var(--ui-color-primary--30);
  --ui-badge-padding: #{variables.$gutter*2};
  padding: var(--ui-badge-padding) calc(var(--ui-badge-padding)*2);
  display: inline-flex;
  align-items: center;
  color: var(--ui-badge-color);
  background-color: var(--ui-badge-bg-color);
  border-radius: variables.$gutter*10;

  &__text {
    margin: auto;
  }

  &--reverse {
    flex-direction: row-reverse;
  }

  &--position {
    &-inline-top {
      transform: translateY(- variables.$gutter*2);
    }

    &-inline-bottom {
      transform: translateY(variables.$gutter*2);
    }

    &-top-left {
      position: absolute;
      top: var(--ui-badge-oflimit, 0);
      left: var(--ui-badge-oflimit, 0);
    }

    &-top-right {
      position: absolute;
      top: var(--ui-badge-oflimit, 0);
      right: var(--ui-badge-oflimit, 0);
    }

    &-bottom-left {
      position: absolute;
      bottom: var(--ui-badge-oflimit, 0);
      left: var(--ui-badge-oflimit, 0);
    }

    &-bottom-right {
      position: absolute;
      bottom: var(--ui-badge-oflimit, 0);
      right: var(--ui-badge-oflimit, 0);
    }
  }

  &--oflimits {
    --ui-badge-oflimit: #{variables.$gutter*-2};
  }

  &--color {
    &-default {
      --ui-badge-bg-color: var(--ui-color-grey--90);
    }

    &-primary {
      --ui-badge-bg-color: var(--ui-color-primary--30);
    }

    &-secondary {
      --ui-badge-bg-color: var(--ui-color-secondary--30);
    }

    &-success {
      --ui-badge-bg-color: var(--ui-color-success--40);
    }

    &-warning {
      --ui-badge-bg-color: var(--ui-color-warning--40);
    }

    &-error {
      --ui-badge-bg-color: var(--ui-color-error--40);
    }
  }


  &--size {
    &-xs {
      @include functions.text--xs;
      --ui-badge-padding: #{variables.$gutter*0.5};
      min-width: variables.$gutter*3.5;
      gap: variables.$gutter*0.5;
    }

    &-sm {
      @include functions.text--sm;
      --ui-badge-padding: #{variables.$gutter};
      min-width: variables.$gutter*3.5;
      gap: variables.$gutter;
    }

    &-md {
      @include functions.text--md;
      min-width: variables.$gutter*4.5;
      gap: variables.$gutter*2;
    }

    &-lg {
      @include functions.text--lg;
      --ui-badge-padding: #{variables.$gutter*3};
      min-width: variables.$gutter*5.5;
      gap: variables.$gutter*3;
    }

    &-xl {
      @include functions.text--lg;
      --ui-badge-padding: #{variables.$gutter*3};
      min-width: variables.$gutter*5.5;
      gap: variables.$gutter*3;
    }
  }



  &--circle {
    &.ui-badge {
      --ui-badge-padding: 0;
      gap: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;

      &--size {
        &-xs {
          width: variables.$gutter*5;
          height: variables.$gutter*5;
        }

        &-sm {
          width: variables.$gutter*6;
          height: variables.$gutter*6;
        }

        &-md {
          width: variables.$gutter*8.5;
          height: variables.$gutter*8.5;

        }

        &-lg {
          width: variables.$gutter*11.5;
          height: variables.$gutter*11.5;
        }

        &-xl {
          width: variables.$gutter*11.5;
          height: variables.$gutter*11.5;
        }
      }
    }
  }
}
</style>