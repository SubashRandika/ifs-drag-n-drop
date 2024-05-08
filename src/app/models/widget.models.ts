import { KtdGridLayoutItem } from '@katoid/angular-grid-layout';
import { GridStackWidget } from 'gridstack';

export interface Widget {
  id: number;
  backgroundColor: string;
  columns: number;
  rows: number;
  content: string;
}

export interface WidgetItem {
  id: string;
  backgroundColor: string;
  content: string;
  isFullWidth: boolean;
}

export interface WidgetLayoutItem extends KtdGridLayoutItem {
  content?: string;
  backgroundColor?: string;
}

export declare type WidgetLayout = WidgetLayoutItem[];

export interface NewWidgetData {
  width: 'full' | 'half';
  height: number;
}

export interface GridStackWidgetItem extends GridStackWidget {
  [key: string]: any;
}
