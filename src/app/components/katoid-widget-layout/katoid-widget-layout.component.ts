import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {
  KtdGridBackgroundCfg,
  ktdGridCompact,
  KtdGridModule,
  ktdTrackById,
} from '@katoid/angular-grid-layout';
import { ktdArrayRemoveItem } from '../../../utils/arrayUtils';
import { generateRandomLightColor } from '../../../utils/colors';
import { WidgetLayout, WidgetLayoutItem } from '../../models/widget.models';
import { WidgetLayoutActionsPanelComponent } from './widget-layout-actions-panel/widget-layout-actions-panel.component';

@Component({
  selector: 'katoid-widget-layout',
  templateUrl: './katoid-widget-layout.component.html',
  styleUrls: ['./katoid-widget-layout.component.css'],
  standalone: true,
  imports: [
    KtdGridModule,
    WidgetLayoutActionsPanelComponent,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    NgClass,
  ],
})
export class KatoidWidgetLayoutComponent implements OnInit {
  cols: number = 8;
  gap: number = 10;
  rowHeight: number = 30;
  rowHeightFit: boolean = false;
  disableDrag: boolean = true;
  disableResize: boolean = true;
  disableRemove: boolean = true;
  isEditModeOn: boolean = false;

  gridBackgroundConfig: Required<KtdGridBackgroundCfg> = {
    show: 'whenDragging',
    borderColor: 'rgba(255, 128, 0, 0.25)',
    gapColor: 'transparent',
    borderWidth: 1,
    rowColor: 'rgba(128, 128, 128, 0.06)',
    columnColor: 'rgba(128, 128, 128, 0.06)',
  };

  layout: WidgetLayout = [
    {
      id: '1',
      content: 'Widget 1',
      backgroundColor: generateRandomLightColor(),
      x: 0,
      y: 0,
      w: 2,
      h: 4,
    },
    {
      id: '2',
      content: 'Widget 2',
      backgroundColor: generateRandomLightColor(),
      x: 2,
      y: 0,
      w: 6,
      h: 4,
    },
    {
      id: '3',
      content: 'Widget 3',
      backgroundColor: generateRandomLightColor(),
      x: 0,
      y: 4,
      w: 4,
      h: 4,
    },
    {
      id: '4',
      content: 'Widget 4',
      backgroundColor: generateRandomLightColor(),
      x: 4,
      y: 4,
      w: 2,
      h: 4,
    },
    {
      id: '5',
      content: 'Widget 5',
      backgroundColor: generateRandomLightColor(),
      x: 6,
      y: 4,
      w: 2,
      h: 4,
    },
    {
      id: '6',
      content: 'Widget 6',
      backgroundColor: generateRandomLightColor(),
      x: 0,
      y: 8,
      w: 4,
      h: 8,
    },
    {
      id: '7',
      content: 'Widget 7',
      backgroundColor: generateRandomLightColor(),
      x: 4,
      y: 8,
      w: 4,
      h: 4,
    },
    {
      id: '8',
      content: 'Widget 8',
      backgroundColor: generateRandomLightColor(),
      x: 6,
      y: 12,
      w: 2,
      h: 4,
    },
    {
      id: '9',
      content: 'Widget 9',
      backgroundColor: generateRandomLightColor(),
      x: 0,
      y: 16,
      w: 8,
      h: 4,
    },
  ];

  trackById = ktdTrackById;

  ngOnInit() {}

  onLayoutUpdated(event: WidgetLayout) {
    console.log('onLayoutUpdated', event);
  }

  onRandomLayoutGenerated() {
    const newLayout: WidgetLayout = [];

    for (let i = 0; i < this.cols; i++) {
      const y = Math.ceil(Math.random() * 4) + 1;

      newLayout.push({
        id: i.toString(),
        x: Math.round(Math.random() * Math.floor(this.cols / 2 - 1)) * 2,
        y: Math.floor(i / 6) * y,
        w: 2,
        h: y,
      });
    }

    this.layout = ktdGridCompact(newLayout, 'horizontal', this.cols);
    this.layout = this.addDynamicContentAndColorIntoWidgets();
  }

  removeWidgetFromLayout(id: string) {
    // Important: Don't mutate the original array.
    //            Let Angular know that the layout has changed creating a new reference.
    this.layout = ktdArrayRemoveItem(this.layout, (item) => item.id === id);
  }

  addDynamicContentAndColorIntoWidgets(): WidgetLayout {
    return this.layout.map((item) => {
      return {
        ...item,
        content: `Widget ${parseInt(item.id) + 1}`,
        backgroundColor: generateRandomLightColor(),
      };
    });
  }

  addWidgetToLayout() {
    const maxId = this.layout.reduce(
      (acc, cur) => Math.max(acc, parseInt(cur.id, 10)),
      -1
    );

    const nextId = maxId + 1;

    const newLayoutItem: WidgetLayoutItem = {
      id: nextId.toString(),
      x: -1,
      y: -1,
      w: 2,
      h: 4,
    };

    // Important: Don't mutate the original array here, create clone of it.
    //            This way notifies the Grid component that the layout has changed.
    this.layout = [newLayoutItem, ...this.layout];

    this.layout = ktdGridCompact(this.layout, 'horizontal', this.cols);

    this.layout = this.addDynamicContentAndColorIntoWidgets();
  }

  toggleEditMode() {
    this.disableDrag = !this.disableDrag;
    this.disableRemove = !this.disableRemove;
    this.disableResize = !this.disableResize;
    this.isEditModeOn =
      !this.disableDrag && !this.disableRemove && !this.disableResize;
  }
}
