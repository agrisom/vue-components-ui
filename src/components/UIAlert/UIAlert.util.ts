import { useAlertStore } from './UIAlert.store';

import type { RouteLocationRaw } from 'vue-router';
import type { Alert, Severity} from './UIAlert.types';
import type { Icon } from '@/shared/types/icon.type';

class NotificationUtil {

  private nextId = 0;

  info(text: string, detail?: string, delay?: number, closeHidden?: boolean) {
    const severity: Severity = 'default';
    const notification: Alert = this.newAppNootification(text, severity, delay !== undefined ? delay : 5000, detail, closeHidden);
    this.dispatch(notification);
  }

  success(text: string, detail?: string, delay?: number, closeHidden?: boolean) {
    const severity: Severity = 'success';
    const notification: Alert = this.newAppNootification(text, severity, delay !== undefined ? delay : 5000, detail, closeHidden);
    this.dispatch(notification);
  }

  warn(text: string, detail?: string, delay?: number, closeHidden?: boolean) {
    const severity: Severity = 'warning';
    const notification: Alert = this.newAppNootification(text, severity, delay !== undefined ? delay : 4000, detail, closeHidden);
    this.dispatch(notification);
  }

  error(text: string, detail?: string, delay?: number, closeHidden?: boolean) {
    const severity: Severity = 'error';
    const notification: Alert = this.newAppNootification(text, severity, delay !== undefined ? delay : 0, detail, closeHidden);
    this.dispatch(notification);
  }

  interactive(text: string, route: { to: RouteLocationRaw; title?: string; icon?: Icon }, detail?: string, delay?: number, closeHidden?: boolean) {
    const severity: Severity = 'secondary';
    const notification: Alert = this.newAppNootification(text, severity, delay !== undefined ? delay : 10000, detail, closeHidden, route);
    this.dispatch(notification);
  }

  private newAppNootification(text: string, severity: Severity, delay: number, detail?: string, closeHidden?: boolean, route?: { to: RouteLocationRaw; title?: string; icon?: Icon }): Alert {
    return {
      id: this.nextId++,
      text: text,
      detail: detail || '',
      severity: severity,
      delay: delay,
      closeHidden: closeHidden,
      route: route,
    };
  }

  private dispatch(notification: Alert) {
    const notificationStore = useAlertStore();
    notificationStore.addNotification(notification);
  }
}

export default new NotificationUtil();