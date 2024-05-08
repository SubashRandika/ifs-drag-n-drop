import { Component, OnInit } from '@angular/core';
import { GridStackOptions, GridStackWidget } from 'gridstack';
import { GridstackModule, nodesCB } from 'gridstack/dist/angular';
import { GridStackWidgetItem } from '../../../models/widget.models';
import { generateRandomLightColor } from '../../../utils/colors';
import { generateRandomUUID } from '../../../utils/randomInfo';
import { SampleWidget1Component } from '../../gridster-grid-layout/sample-widgets/sample-widget-1/sample-widget-1.component';
import { SampleWidget2Component } from '../../gridster-grid-layout/sample-widgets/sample-widget-2/sample-widget-2.component';
import { NgComponentOutlet, NgForOf, NgStyle } from '@angular/common';

@Component({
  selector: 'granite-drag-drop-grid',
  templateUrl: './granite-drag-drop-grid.component.html',
  styleUrls: ['./granite-drag-drop-grid.component.css'],
  standalone: true,
  imports: [GridstackModule, NgForOf, NgStyle, NgComponentOutlet],
})
export class GraniteDragDropGridComponent implements OnInit {
  /** sample grid options and items to load... */
  public gridOptions: GridStackOptions = {
    float: true,
    minRow: 1,
    cellHeight: 200,
    removable: false,
    disableDrag: false,
    disableResize: true,
    placeholderClass: 'widget-placeholder',
    columnOpts: {
      breakpointForWindow: true,
      breakpoints: [{ w: 1200, c: 1 }],
      columnMax: 2,
    },
  };
  public items: GridStackWidgetItem[] = [
    {
      x: 0,
      y: 0,
      w: 1,
      minW: 1,
      maxW: 2,
      minH: 1,
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
      minW: 1,
      maxW: 2,
      minH: 1,
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
      minW: 1,
      maxW: 2,
      minH: 1,
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

  // called whenever items change size/position/etc.. see other events
  public onChange(data: nodesCB) {
    console.log('change ', data.nodes.length > 1 ? data.nodes : data.nodes[0]);
  }

  // ngFor unique node id to have correct match between our items used and GS
  public identify(index: number, w: GridStackWidget) {
    return w.id; // or use index if no id is set and you only modify at the end...
  }
}
