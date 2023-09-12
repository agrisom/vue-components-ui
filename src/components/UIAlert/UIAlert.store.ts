import { defineStore } from 'pinia';

import type { Alert } from './UIAlert.types';

export const useAlertStore = defineStore('notifications', {
  state: () => {
    return {
      notifications: [] as Alert[],
    };
  },
  actions: {
    addNotification(notification: Alert) {
      this.notifications.push(notification);
    },
    removeNotification(notificationId: number) {
      this.notifications = this.notifications.filter(notif => notif.id !== notificationId);
    },
    resetStore() {
      this.notifications = [];
    },
  },
});