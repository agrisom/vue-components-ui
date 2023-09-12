import type { RouteLocationRaw } from 'vue-router';
import type { Icon } from '@/shared/types/icon.type';

export type Severity = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';

export interface Alert {
  id: number;
  text: string;
  detail: string;
  severity: Severity;
  delay: number;
  closeHidden?: boolean;
  route?: { to: RouteLocationRaw; title?: string; icon?: Icon };
}