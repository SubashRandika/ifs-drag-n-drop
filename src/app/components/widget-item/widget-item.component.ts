import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Widget } from '../../models/widget.models';
import { CdkDragEnter, DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'widget-item',
  templateUrl: './widget-item.component.html',
  styleUrls: ['./widget-item.component.css'],
  standalone: true,
  imports: [MatCardModule, DragDropModule],
})
export class WidgetItemComponent implements OnInit {
  @Input()
  widget!: Widget;

  @Input()
  dragData!: number;

  @Output()
  cdkOnDragEntered: EventEmitter<CdkDragEnter<any>> = new EventEmitter<
    CdkDragEnter<any>
  >();

  constructor() {}

  ngOnInit() {}

  widgetDragEntered(event: CdkDragEnter) {
    this.cdkOnDragEntered.emit(event);
  }
}
