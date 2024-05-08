import { NgComponentOutlet, NgForOf, NgStyle } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { GridStackOptions, GridStackWidget } from 'gridstack';
import {
  GridstackComponent,
  GridstackModule,
  nodesCB,
} from 'gridstack/dist/angular';
import { GridStackWidgetItem } from '../../../models/widget.models';

@Component({
  selector: 'granite-drag-drop-grid',
  templateUrl: './granite-drag-drop-grid.component.html',
  styleUrls: ['./granite-drag-drop-grid.component.css'],
  standalone: true,
  imports: [GridstackModule, NgForOf, NgStyle, NgComponentOutlet],
})
export class GraniteDragDropGridComponent implements OnInit, OnChanges {
  @ViewChild(GridstackComponent)
  gridstack!: GridstackComponent;

  @Input()
  gridConfigurations: GridStackOptions = {};

  @Input()
  gridWidgetItems: GridStackWidgetItem[] = [];

  @Input()
  enableDragMove: boolean = false;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['enableDragMove']) {
      this.gridstack?.grid?.enableMove(this.enableDragMove);
    }
  }

  ngOnInit() {}

  public onChange(data: nodesCB) {
    console.log('change ', data.nodes.length > 1 ? data.nodes : data.nodes[0]);
  }

  public identify(index: number, w: GridStackWidget) {
    return w.id;
  }
}
