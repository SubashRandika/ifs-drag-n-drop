import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WidgetGridLayoutComponent } from './components/widget-grid-layout/widget-grid-layout.component';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WidgetGridLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
