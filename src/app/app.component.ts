import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WidgetGridLayoutComponent } from './components/widget-grid-layout/widget-grid-layout.component';
import { NgDndWidgetLayoutComponent } from './components/ng-dnd-widget-layout/ng-dnd-widget-layout.component';
import { KatoidWidgetLayoutComponent } from './components/katoid-widget-layout/katoid-widget-layout.component';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
