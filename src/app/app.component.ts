import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KatoidWidgetLayoutComponent } from './components/katoid-widget-layout/katoid-widget-layout.component';
import { NgDndWidgetLayoutComponent } from './components/ng-dnd-widget-layout/ng-dnd-widget-layout.component';
import { WidgetGridLayoutComponent } from './components/widget-grid-layout/widget-grid-layout.component';
import { NxtSortablejsLayoutComponent } from './components/nxt-sortablejs-layout/nxt-sortablejs-layout.component';
import { GridsterGridLayoutComponent } from './components/gridster-grid-layout/gridster-grid-layout.component';
import { GridstackWidgetDashboardComponent } from './components/gridstack-widget-dashboard/gridstack-widget-dashboard.component';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    WidgetGridLayoutComponent,
    NgDndWidgetLayoutComponent,
    KatoidWidgetLayoutComponent,
    NxtSortablejsLayoutComponent,
    GridsterGridLayoutComponent,
    GridstackWidgetDashboardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('mainRef', { read: ElementRef<HTMLElement> })
  mainElement!: ElementRef<HTMLElement>;

  onNewWidgetAdded() {
    if (this.mainElement) {
      this.mainElement.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }
}
