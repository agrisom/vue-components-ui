<template>
  <div
    class="ui-alert-list"
    aria-live="assertive"
  >
    <template v-if="notifications.length">
      <div
        v-if="notifications.length > 1"
        class="ui-alert-list__actions alert-box alert-box--secondary"
      >
        <UIBadge
          class="mr-auto"
          :text="notifications.length.toString()"
          color="default"
          circle
        />
        <UIButton
          icon="trash"
          size="sm"
          icon-size="sm"
          @clicked="deleteAllNoti"
        />
        <UIButton
          v-if="notifications.length > 2"
          :icon="expanded ? 'chevron-up' : 'chevron-down'"
          size="sm"
          icon-size="sm"
          @clicked="expanded = !expanded"
        />
      </div>
      <transition-group :name="'fade-fast'">
        <UIAlert
          v-for="item in notificationList"
          :key="item.id"
          :severity="item.severity"
          :title="item.text"
          :detail="item.detail"
          :delay="item.delay"
          :close-button="!item.closeHidden"
          :route="item.route"
          @delete="deleteNoti(item.id)"
        />
      </transition-group>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ComputedRef, ref } from 'vue';
import { useAlertStore } from './UIAlert.store';

import type { Alert } from './UIAlert.types';

import UIAlert from './UIAlert.vue';
import UIBadge from '@/components/UIBadge/UIBadge.vue';
import UIButton from '@/components/UIButton/UIButton.vue';

const expanded = ref(false);
const notificationStore = useAlertStore();
const notifications: ComputedRef<Alert[]> = computed(() => notificationStore.notifications);
const notificationList = computed(() => notifications.value.slice(0, expanded.value ? undefined : 2));

function deleteNoti(id: number) {
  notificationStore.removeNotification(id);
}

function deleteAllNoti() {
  notificationStore.resetStore();
}
</script>

<style lang="scss">
.ui-alert-list {
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: variables.$gutter;
  z-index: 15;
  top: variables.$gutter * 4;
  right: variables.$gutter * 6;
  min-width: 15rem;
  max-width: 75vw;

  &__actions {
    flex-grow: 1;
    justify-content: space-between;
    box-shadow: inset 0 0 2px 1px var(--ui-color-secondary--20);
  }

  @media (variables.$mq-mobile) {
    max-width: 90vw;
  }
}
</style>