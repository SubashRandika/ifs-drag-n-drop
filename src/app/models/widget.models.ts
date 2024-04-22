import { KtdGridLayoutItem } from '@katoid/angular-grid-layout';

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
