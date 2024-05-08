import { Component, OnInit } from '@angular/core';
import { GraniteDragDropGridComponent } from './granite-drag-drop-grid/granite-drag-drop-grid.component';
import { WidgetLayoutActionsPanelComponent } from '../katoid-widget-layout/widget-layout-actions-panel/widget-layout-actions-panel.component';

@Component({
  selector: 'gridstack-widget-dashboard',
  templateUrl: './gridstack-widget-dashboard.component.html',
  styleUrls: ['./gridstack-widget-dashboard.component.css'],
  standalone: true,
  imports: [GraniteDragDropGridComponent, WidgetLayoutActionsPanelComponent],
})
export class GridstackWidgetDashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  toggleEditMode() {}
  addWidgetToLayout() {}
}
