import {
  CdkDragEnter,
  CdkDropList,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { generateRandomLightColor } from '../../../utils/colors';
import { Widget } from '../../models/widget.models';

@Component({
  selector: 'widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.css'],
  standalone: true,
  imports: [MatGridListModule, MatCardModule, DragDropModule],
})
export class WidgetWrapperComponent implements OnInit, AfterViewInit {
  @ViewChildren(CdkDropList) dropsQuery!: QueryList<CdkDropList>;

  drops: CdkDropList[] = [];

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

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.dropsQuery.map((drop) => {
      this.drops.push(drop);
    });
  }

  onDragEntered(event: CdkDragEnter) {
    moveItemInArray(this.widgets, event.item.data, event.container.data);
  }
}
