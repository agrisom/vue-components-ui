import type { Icon } from '@/shared/types/icon.type';

export interface TabHeader {
  text: string;
  value: string;
  disabled?: boolean;
  icon?: Icon;
}

export type TabHeaderValue<T extends readonly TabHeader[]> = T[number]['value'];

export function tabContentSlotName<T extends readonly TabHeader[]>(name: TabHeaderValue<T>) {
  return `${name}-content` as const;
}

export function tabOverrideSlotName<T extends readonly TabHeader[]>(name: TabHeaderValue<T>) {
  return `${name}-override` as const;
}

export function tabAppendSlotName<T extends readonly TabHeader[]>(name: TabHeaderValue<T>) {
  return `${name}-tab-append` as const;
}