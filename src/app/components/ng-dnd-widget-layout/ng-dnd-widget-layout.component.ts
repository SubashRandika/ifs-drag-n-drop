import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { DndModule } from '@ng-dnd/core';
import { generateRandomLightColor } from '../../utils/colors';
import { DragDropDirective } from '../../directives/drag-drop.directive';
import { Widget } from '../../models/widget.models';
import { AsyncPipe, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'ng-dnd-widget-layout',
  templateUrl: './ng-dnd-widget-layout.component.html',
  styleUrls: ['./ng-dnd-widget-layout.component.css'],
  standalone: true,
  imports: [MatGridListModule, DndModule, DragDropDirective, AsyncPipe, NgIf, NgStyle],
})
export class NgDndWidgetLayoutComponent implements OnInit {
  widgets: Widget[] = [
    {
      id: 1,
      content: 'Widget 1',
      columns: 3,
      rows: 1,
      backgroundColor: generateRandomLightColor(),
    },
    {
      id: 2,
      content: 'Widget 2',
      columns: 1,
      rows: 2,
      backgroundColor: generateRandomLightColor(),
    },
    {
      id: 3,
      content: 'Widget 3',
      columns: 1,
      rows: 1,
      backgroundColor: generateRandomLightColor(),
    },
    {
      id: 4,
      content: 'Widget 4',
      columns: 2,
      rows: 1,
      backgroundColor: generateRandomLightColor(),
    },
    {
      id: 5,
      content: 'Widget 5',
      columns: 1,
      rows: 1,
      backgroundColor: generateRandomLightColor(),
    },
    {
      id: 6,
      content: 'Widget 6',
      columns: 1,
      rows: 1,
      backgroundColor: generateRandomLightColor(),
    },
    {
      id: 7,
      content: 'Widget 7',
      columns: 1,
      rows: 1,
      backgroundColor: generateRandomLightColor(),
    },
    {
      id: 8,
      content: 'Widget 8',
      columns: 1,
      rows: 1,
      backgroundColor: generateRandomLightColor(),
    },
    {
      id: 9,
      content: 'Widget 9',
      columns: 1,
      rows: 1,
      backgroundColor: generateRandomLightColor(),
    },
    {
      id: 10,
      content: 'Widget 10',
      columns: 1,
      rows: 1,
      backgroundColor: generateRandomLightColor(),
    },
    {
      id: 11,
      content: 'Widget 11',
      columns: 2,
      rows: 2,
      backgroundColor: generateRandomLightColor(),
    },
    {
      id: 12,
      content: 'Widget 12',
      columns: 2,
      rows: 1,
      backgroundColor: generateRandomLightColor(),
    },
  ];

  initialWidgets: Widget[] = [];

  constructor() {}

  ngOnInit() {
    this.initialWidgets = this.widgets;
  }

  beginDrag() {
    this.initialWidgets = this.widgets.slice(0);
  }

  endDrag(goodEdit: boolean) {
    if (!goodEdit) {
      this.widgets = this.initialWidgets;
    }
  }

  moveCard([dragIndex, hoverIndex]: [number, number]) {
    moveItemInArray(this.widgets, dragIndex, hoverIndex);
  }
}
