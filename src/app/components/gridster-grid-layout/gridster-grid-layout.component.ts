import { NgComponentOutlet, NgForOf, NgStyle } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  CompactType,
  DisplayGrid,
  GridsterComponent,
  GridsterComponentInterface,
  GridsterConfig,
  GridsterItem,
  GridsterItemComponent,
  GridsterItemComponentInterface,
  GridType,
} from 'angular-gridster2';
import { generateRandomLightColor } from '../../utils/colors';
import { WidgetLayoutActionsPanelComponent } from '../katoid-widget-layout/widget-layout-actions-panel/widget-layout-actions-panel.component';
import { AddWidgetDialogComponent } from './add-widget-dialog/add-widget-dialog.component';
import { GraniteDragDropGridComponent } from './granite-drag-drop-grid/granite-drag-drop-grid.component';
import { SampleWidget1Component } from './sample-widgets/sample-widget-1/sample-widget-1.component';
import { SampleWidget2Component } from './sample-widgets/sample-widget-2/sample-widget-2.component';
import { generateRandomUUID } from '../../utils/randomInfo';

@Component({
  selector: 'gridster-grid-layout',
  templateUrl: './gridster-grid-layout.component.html',
  styleUrls: ['./gridster-grid-layout.component.css'],
  standalone: true,
  imports: [
    GridsterComponent,
    GridsterItemComponent,
    NgForOf,
    NgStyle,
    WidgetLayoutActionsPanelComponent,
    GraniteDragDropGridComponent,
    NgComponentOutlet,
  ],
})
export class GridsterGridLayoutComponent implements OnInit {
  addWidgetDialog: MatDialog = inject(MatDialog);

  options!: GridsterConfig;
  dashboard!: Array<GridsterItem>;
  isEditModeOn: boolean = false;

  static gridInit(gridster: GridsterComponentInterface): void {
    console.log('GridInitialized', gridster);
  }

  static itemChange(
    item: GridsterItem,
    itemComponent: GridsterItemComponentInterface
  ) {
    console.log('WidgetChanged', item, itemComponent);
  }

  constructor() {}

  ngOnInit() {
    this.options = {
      gridType: GridType.VerticalFixed,
      compactType: CompactType.None,
      margin: 10,
      outerMargin: true,
      useTransformPositioning: true,
      mobileBreakpoint: 1200,
      useBodyForBreakpoint: false,
      disableAutoPositionOnConflict: true,
      setGridSize: true,
      minCols: 2,
      maxCols: 2,
      minRows: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      minItemCols: 1,
      maxItemCols: 2,
      minItemRows: 1,
      addEmptyRowsCount: 3,
      fixedRowHeight: 200,
      keepFixedHeightInMobile: true,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      ignoreMarginInRow: false,
      draggable: {
        enabled: false,
      },
      resizable: {
        enabled: false,
      },
      swap: true,
      pushItems: true,
      disablePushOnDrag: false,
      pushDirections: { north: true, east: true, south: true, west: true },
      displayGrid: DisplayGrid.OnDragAndResize,
      scrollToNewItems: true,
      enableBoundaryControl: true,
      initCallback: GridsterGridLayoutComponent.gridInit,
      itemChangeCallback: GridsterGridLayoutComponent.itemChange,
    };

    this.dashboard = [];
  }

  toggleEditMode() {
    this.isEditModeOn = !this.options?.draggable?.enabled;
    this.options = {
      ...this.options,
      draggable: {
        ...this.options.draggable,
        enabled: !this.options?.draggable?.enabled,
      },
    };
  }

  keepEditModeOn(): void {
    this.isEditModeOn = true;
    this.options = {
      ...this.options,
      draggable: {
        ...this.options.draggable,
        enabled: this.isEditModeOn,
      },
    };
  }

  addWidgetToLayout() {
    const dialogRef = this.addWidgetDialog.open(AddWidgetDialogComponent, {
      width: '25vw',
      height: '50vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      let possibleX: number = 0;
      let possibleY: number = 0;

      if (result) {
        if (this.options?.api && this.options?.api?.getFirstPossiblePosition) {
          possibleX = this.options.api.getFirstPossiblePosition(
            this.dashboard[this.dashboard.length - 1]
          ).x;
          possibleY = this.options.api.getFirstPossiblePosition(
            this.dashboard[this.dashboard.length - 1]
          ).y;
        }

        const isSampleWidget1: boolean = Math.random() > 0.5;

        this.dashboard.push({
          x: this.dashboard.length === 0 ? 0 : possibleX,
          y: this.dashboard.length === 0 ? 0 : possibleY,
          cols: result?.data?.width === 'full' ? 2 : 1,
          rows: result?.data?.height ?? 1,
          label: `Widget ${this.dashboard.length + 1}`,
          backgroundColor: generateRandomLightColor(),
          widget: isSampleWidget1
            ? SampleWidget1Component
            : SampleWidget2Component,
          widgetInputs: {
            widgetId: generateRandomUUID(),
            description: `Sample Widget ${isSampleWidget1 ? '1' : '2'}`,
          },
        });

        this.keepEditModeOn();
      }
    });
  }
}
