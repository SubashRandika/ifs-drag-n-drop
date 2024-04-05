import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'widget-layout-actions-panel',
  templateUrl: './widget-layout-actions-panel.component.html',
  styleUrls: ['./widget-layout-actions-panel.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
})
export class WidgetLayoutActionsPanelComponent implements OnInit {
  @Input()
  editModeOn: boolean = false;

  @Output()
  generateRandomLayout: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  addNewWidget: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  editWidgetLayout: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit() {}

  generateLayout(): void {
    this.generateRandomLayout.emit();
  }

  addWidgetToLayout() {
    this.addNewWidget.emit();
  }

  toggleEditMode() {
    this.editWidgetLayout.emit();
  }
}
