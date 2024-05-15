import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GridStackOptions } from 'gridstack';
import { GridStackWidgetItem } from '../../models/widget.models';
import { generateRandomLightColor } from '../../utils/colors';
import { generateRandomUUID } from '../../utils/randomInfo';
import { AddWidgetDialogComponent } from '../gridster-grid-layout/add-widget-dialog/add-widget-dialog.component';
import { SampleWidget1Component } from '../gridster-grid-layout/sample-widgets/sample-widget-1/sample-widget-1.component';
import { SampleWidget2Component } from '../gridster-grid-layout/sample-widgets/sample-widget-2/sample-widget-2.component';
import { WidgetLayoutActionsPanelComponent } from '../katoid-widget-layout/widget-layout-actions-panel/widget-layout-actions-panel.component';
import { GraniteDropGridComponent } from './granite-drop-grid/granite-drop-grid.component';

@Component({
  selector: 'gridstack-widget-dashboard',
  templateUrl: './gridstack-widget-dashboard.component.html',
  styleUrls: ['./gridstack-widget-dashboard.component.css'],
  standalone: true,
  imports: [GraniteDropGridComponent, WidgetLayoutActionsPanelComponent],
})
export class GridstackWidgetDashboardComponent implements OnInit {
  addWidgetDialog: MatDialog = inject(MatDialog);

  isEditModeOn: boolean = false;

  public gridConfigurations: GridStackOptions = {
    margin: 8,
    float: true,
    cellHeight: 200,
    removable: false,
    disableDrag: true,
    disableResize: true,
    placeholderText: 'Drop Here',
    column: 2,
    columnOpts: {
      breakpointForWindow: true,
      breakpoints: [{ w: 1280, c: 1 }],
      columnMax: 2,
    },
    auto: false,
  };
  public gridWidgetItems: GridStackWidgetItem[] = [];

  constructor() {}

  ngOnInit() {}

  toggleEditMode() {
    this.isEditModeOn = !this.isEditModeOn;
  }
  addWidgetToLayout() {
    const dialogRef = this.addWidgetDialog.open(AddWidgetDialogComponent, {
      width: '25vw',
      height: '60vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const isSampleWidget1: boolean = Math.random() > 0.5;

        this.gridWidgetItems = [
          ...this.gridWidgetItems,
          {
            w: result?.data?.width === 'full' ? 2 : 1,
            h: result?.data?.height ?? 1,
            id: generateRandomUUID(),
            component: isSampleWidget1
              ? SampleWidget1Component
              : SampleWidget2Component,
            inputs: {
              widgetId: generateRandomUUID(),
              description: `Sample Widget ${isSampleWidget1 ? '1' : '2'}`,
              backgroundColor: generateRandomLightColor(),
            },
            autoPosition: true,
          },
        ];

        this.isEditModeOn = true;
      }
    });
  }
}
