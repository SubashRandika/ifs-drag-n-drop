import { Component, OnInit } from '@angular/core';
import { GraniteDragDropGridComponent } from './granite-drag-drop-grid/granite-drag-drop-grid.component';
import { WidgetLayoutActionsPanelComponent } from '../katoid-widget-layout/widget-layout-actions-panel/widget-layout-actions-panel.component';
import { GridStackOptions } from 'gridstack';
import { GridStackWidgetItem } from '../../models/widget.models';
import { generateRandomUUID } from '../../utils/randomInfo';
import { SampleWidget1Component } from '../gridster-grid-layout/sample-widgets/sample-widget-1/sample-widget-1.component';
import { generateRandomLightColor } from '../../utils/colors';
import { SampleWidget2Component } from '../gridster-grid-layout/sample-widgets/sample-widget-2/sample-widget-2.component';

@Component({
  selector: 'gridstack-widget-dashboard',
  templateUrl: './gridstack-widget-dashboard.component.html',
  styleUrls: ['./gridstack-widget-dashboard.component.css'],
  standalone: true,
  imports: [GraniteDragDropGridComponent, WidgetLayoutActionsPanelComponent],
})
export class GridstackWidgetDashboardComponent implements OnInit {
  isEditModeOn: boolean = false;

  public gridConfigurations: GridStackOptions = {
    margin: 8,
    float: true,
    cellHeight: 200,
    removable: false,
    disableDrag: true,
    disableResize: true,
    sizeToContent: true,
    placeholderText: 'Drop Here',
    column: 2,
    columnOpts: {
      breakpointForWindow: true,
      breakpoints: [{ w: 1200, c: 1 }],
      columnMax: 2,
    },
  };
  public gridWidgetItems: GridStackWidgetItem[] = [
    {
      x: 0,
      y: 0,
      w: 1,
      id: generateRandomUUID(),
      component: SampleWidget1Component,
      inputs: {
        widgetId: 1,
        description: 'Widget 1',
        backgroundColor: generateRandomLightColor(),
      },
    },
    {
      x: 1,
      y: 0,
      w: 1,
      id: generateRandomUUID(),
      component: SampleWidget2Component,
      inputs: {
        widgetId: 2,
        description: 'Widget 2',
        backgroundColor: generateRandomLightColor(),
      },
    },
    {
      x: 0,
      y: 1,
      w: 2,
      id: generateRandomUUID(),
      component: SampleWidget1Component,
      inputs: {
        widgetId: 3,
        description: 'Widget 1',
        backgroundColor: generateRandomLightColor(),
      },
    },
  ];

  constructor() {}

  ngOnInit() {}

  toggleEditMode() {
    this.isEditModeOn = !this.isEditModeOn;
  }
  addWidgetToLayout() {}
}
