import { Component, Input, OnInit } from '@angular/core';
import {
  GridsterComponent,
  GridsterConfig,
  GridsterItemComponent,
} from 'angular-gridster2';

@Component({
  selector: 'granite-drag-drop-grid',
  templateUrl: './granite-drag-drop-grid.component.html',
  styleUrls: ['./granite-drag-drop-grid.component.css'],
  standalone: true,
  imports: [GridsterComponent, GridsterItemComponent],
})
export class GraniteDragDropGridComponent implements OnInit {
  @Input()
  configOptions!: GridsterConfig;

  constructor() {}

  ngOnInit() {}
}
