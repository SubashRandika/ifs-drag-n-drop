import { NgClass, NgIf } from '@angular/common';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { SortablejsModule } from 'nxt-sortablejs';
import { Options } from 'sortablejs';
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
  imports: [SortablejsModule, NgClass, WidgetLayoutActionsPanelComponent, NgIf],
})
export class NxtSortablejsLayoutComponent implements OnInit {
  @Input()
  containerRef!: ElementRef<HTMLElement>;

  isEditModeOn: boolean = false;

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

    setTimeout(() => {
      this.scrollBottom();
    });
  }

  onRandomLayoutGenerated() {
    this.widgets = generateRandomWidgetItems();
  }

  scrollBottom() {
    if (this.containerRef) {
      this.containerRef.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }
}
