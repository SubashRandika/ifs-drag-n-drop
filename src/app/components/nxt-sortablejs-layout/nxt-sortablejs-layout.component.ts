import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SortablejsModule } from 'nxt-sortablejs';
import { Options } from 'sortablejs';
import { pulseAnimation } from '../../animations/widget.animation';
import { WidgetItem } from '../../models/widget.models';
import { generateRandomWidgetItems } from '../../utils/arrayUtils';
import { generateRandomLightColor } from '../../utils/colors';
import {
  generateRandomBoolean,
  generateRandomUUID,
} from '../../utils/randomInfo';
import { WidgetLayoutActionsPanelComponent } from '../katoid-widget-layout/widget-layout-actions-panel/widget-layout-actions-panel.component';

@Component({
  selector: 'nxt-sortablejs-layout',
  templateUrl: './nxt-sortablejs-layout.component.html',
  styleUrls: ['./nxt-sortablejs-layout.component.css'],
  standalone: true,
  imports: [
    SortablejsModule,
    NgClass,
    WidgetLayoutActionsPanelComponent,
    NgIf,
    NgStyle,
  ],
  animations: [pulseAnimation],
})
export class NxtSortablejsLayoutComponent implements OnInit {
  @Output() newWidgetAdded = new EventEmitter<void>();

  isEditModeOn: boolean = false;
  isNewWidgetAdded: boolean = false;

  widgets: WidgetItem[] = generateRandomWidgetItems();

  configOptions: Options = {
    ghostClass: 'widget-ghost-placeholder',
    dragClass: 'widget-dragging',
    disabled: true,
  };

  constructor() {}

  ngOnInit() {}

  toggleEditMode() {
    this.isEditModeOn = !this.isEditModeOn;
    this.configOptions = {
      ...this.configOptions,
      disabled: !this.isEditModeOn,
    };
  }

  addWidgetToLayout() {
    const newWidgetItem: WidgetItem = {
      id: generateRandomUUID(),
      content: `Widget ${this.widgets.length + 1}`,
      backgroundColor: generateRandomLightColor(),
      isFullWidth: generateRandomBoolean(),
    };

    this.widgets = [...this.widgets, newWidgetItem];
    this.isNewWidgetAdded = true;

    setTimeout(() => {
      this.newWidgetAdded.emit();
    });
  }

  onRandomLayoutGenerated() {
    this.widgets = generateRandomWidgetItems();
    this.isNewWidgetAdded = false;
  }
}
