import { Icon } from '@/shared/types/icon.type';

export interface InputValue {
  value: string;
  text: string;
}

export interface InputValueRadio extends InputValue {
  icon?: Icon;
  disabled?: boolean;
}