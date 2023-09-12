import { Color } from '@/shared/types/color.type';
import { Icon } from '@/shared/types/icon.type';

export interface FabItem {
  text: string;
  icon: Icon;
  value: string;
  show?: boolean;
  color?: Color;
}