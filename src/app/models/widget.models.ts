import { KtdGridLayoutItem } from '@katoid/angular-grid-layout';
import {
  Draggable,
  GridsterConfig,
  PushDirections,
  Resizable,
} from 'angular-gridster2';

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

export interface Safe extends GridsterConfig {
  draggable: Draggable;
  resizable: Resizable;
  pushDirections?: PushDirections;
}
