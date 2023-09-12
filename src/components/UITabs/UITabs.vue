<script setup lang="ts" generic="T extends readonly TabHeader[]">
import { ref, computed, onMounted, onUpdated, onUnmounted } from 'vue';
import UIIcon from '@/components/UIIcon/UIIcon.vue';
import UIButton from '@/components/UIButton/UIButton.vue';

import { tabContentSlotName, tabAppendSlotName, tabOverrideSlotName, type TabHeader, type TabHeaderValue } from './UITabs.types';

const props = withDefaults(defineProps<{
  headers: T;
  active: TabHeaderValue<T>;
  height?: string;
  minHeight?: string;
}>(), {
  height: 'auto',
  minHeight: '50px',
  filter: () => true,
});

const headers = computed(() => props.headers);
const active = computed(() => props.active);
const contentSlotName = computed(() => tabContentSlotName(active.value));

const emit = defineEmits<{
  (e: 'update:active', value: TabHeaderValue<T>): void;
}>();

const headerExtraWidth = ref('');
const transitioning = ref(false);
const hasScroll = ref(false);
const activePrev = ref(false);
const activeNext = ref(false);
const listWrapperRef = ref();
const headerExtraRef = ref();
const heightVar = computed(() => `--ui-tabs-minheight:${props.minHeight};--ui-tabs-height:${props.height};`);

function changeTab(key: TabHeaderValue<T>, disabled?: boolean) {
  if (disabled !== true) {
    emit('update:active', key);
  }
}

function isVisibleScroll() {
  if (headerExtraRef.value) {
    const width = headerExtraRef.value.getClientRects() && headerExtraRef.value.getClientRects()[0] ? headerExtraRef.value.getClientRects()[0].width ?? 0 : 0;
    headerExtraWidth.value = `--ui-tabs-header-extra-width: ${Math.ceil(width)}px;`;
    hasScroll.value = listWrapperRef.value.clientWidth < listWrapperRef.value.scrollWidth;
    activePrev.value = listWrapperRef.value.scrollLeft !== 0;
    activeNext.value = Math.ceil(listWrapperRef.value.scrollLeft + listWrapperRef.value.clientWidth) !== listWrapperRef.value.scrollWidth;
  }
}

function updateScrollPosition() {
  activePrev.value = listWrapperRef.value.scrollLeft !== 0;
  activeNext.value = Math.ceil(listWrapperRef.value.scrollLeft + listWrapperRef.value.clientWidth) !== listWrapperRef.value.scrollWidth;
}

function movePrev() {
  listWrapperRef.value.scroll({
    left: listWrapperRef.value.scrollLeft - 200,
    behavior: 'smooth',
  });
}

function moveNext() {
  listWrapperRef.value.scroll({
    left: listWrapperRef.value.scrollLeft + 200,
    behavior: 'smooth',
  });
}

function starting() {
  transitioning.value = true;
}

function finishing() {
  transitioning.value = false;
}

onMounted(() => {
  isVisibleScroll();
  window.addEventListener('resize', isVisibleScroll);
});

onUpdated(() => {
  isVisibleScroll();
});

onUnmounted(() => {
  window.removeEventListener('resize', isVisibleScroll);
});

defineExpose({
  starting,
  finishing,
});
</script>

<template>
  <div
    class="ui-tabs"
    :style="heightVar + headerExtraWidth"
  >
    <div class="ui-tabs__header">
      <div class="ui-tabs__bar">
        <div
          v-if="hasScroll"
          class="ui-tabs__arrow"
        >
          <UIButton
            class="ui-tabs__arrow-button"
            theme="transparent"
            color="primary"
            icon="chevron-left"
            size="sm"
            icon-size="md"
            :disabled="!activePrev"
            @clicked="movePrev"
          />
        </div>
        <div
          ref="listWrapperRef"
          class="ui-tabs__list-wrapper"
          @scroll="updateScrollPosition"
        >
          <ul class="ui-tabs__list">
            <li
              v-for="(header, ind) in headers"
              :key="'header_' + ind"
              class="ui-tabs__list-item"
            >
              <button
                class="ui-tabs__button"
                role="tab"
                :class="[{ 'ui-tabs__button--active': header.value === active }, { 'ui-tabs__button--disabled': header.disabled }]"
                :aria-selected="header.value === active"
                :aria-disabled="header.disabled"
                type="button"
                @click.stop="changeTab(header.value, header.disabled)"
              >
                <slot
                  :name="tabOverrideSlotName(header.value)"
                  :header="header"
                  :ind="ind"
                >
                  <UIIcon
                    v-if="header.icon"
                    class="ui-tabs__button-icon"
                    :name="header.icon"
                    size="sm"
                  />
                  <span class="ui-tabs__button-text">{{ header.text }}</span>
                  <slot
                    :name="tabAppendSlotName(header.value)"
                    :header="header"
                  />
                  <slot
                    name="append-all-tabs"
                    :header="header"
                  />
                </slot>
              </button>
            </li>
          </ul>
        </div>
        <div
          v-if="hasScroll"
          class="ui-tabs__arrow"
        >
          <UIButton
            class="ui-tabs__arrow-button"
            theme="transparent"
            color="primary"
            icon="chevron-right"
            size="sm"
            icon-size="md"
            :disabled="!activeNext"
            @clicked="moveNext"
          />
        </div>
      </div>
      <div
        v-if="$slots['headerextra']"
        ref="headerExtraRef"
        class="ui-tabs__header-extra"
      >
        <slot name="headerextra" />
      </div>
    </div>
    <div
      class="ui-tabs__content"
      :class="[{ 'ui-tabs__content--transitioning': transitioning }]"
      aria-live="assertive"
    >
      <slot :name="contentSlotName" />
    </div>
  </div>
</template>

<style lang="scss">
  .ui-tabs {
    --ui-tabs-border-color: var(--ui-color-grey--10);
    height: var(--ui-tabs-height);
    min-height: var(--ui-tabs-minheight);
    overflow: hidden;
    display: flex;
    flex-direction: column;

    &__header {
      flex: 0 0 auto;
      display: flex;
    }

    &__content {
      flex: 1 1 auto;
      overflow: auto;

      &--transitioning {
        overflow: hidden;
      }
    }

    &__bar {
      display: flex;
      flex: 1 1 auto;
      width: calc(100% - var(--ui-tabs-header-extra-width, 0px));
    }

    &__header-extra {
      flex: 0 0 auto;
      display: flex;
    }

    &__list-wrapper {
      flex: 1 1 auto;
      overflow: auto;
      @include functions.scrollbar-none;
    }

    &__list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
    }

    &__list-item {
      flex-shrink: 0;
    }

    &__arrow {
      display: flex;
      align-items: center;
    }

    &__arrow-button {
      padding: #{variables.$gutter*3};
    }

    &__button-icon {
      margin-right: #{variables.$gutter*2};
    }

    &__button {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 #{variables.$gutter*4};
      border: none;
      height: 3rem;
      width: 100%;
      background-color: transparent;
      box-shadow: inset 0 0 0 0 var(--ui-color-primary--30);
      transition: background-color 0.1s ease-out, box-shadow 0.1s ease-out;
      color: var(--ui-color-primary--50);
      font-size: #{variables.$gutter*4};

      &:hover,
      &:focus {
        color: var(--ui-color-primary--40);
        box-shadow: inset 0 -4px 0 -1px var(--ui-color-primary--40);
      }

      &--active {
        color: var(--ui-color-primary--30);
        box-shadow: inset 0 -3px 0 -1px var(--ui-color-primary--30);
        text-stroke: .5px;
        -webkit-text-stroke: .5px;
      }

      &--disabled {
        opacity: 0.4;
        pointer-events: none;
      }
    }

    @media (variables.$mq-mobile) {
      .ui-tabs {
        &__button {
          padding: 0 #{variables.$gutter*2};
          height: 2.5rem;
        }
      }
    }
  }
</style>
