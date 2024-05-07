import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sample-widget-1',
  templateUrl: './sample-widget-1.component.html',
  styleUrls: ['./sample-widget-1.component.css'],
})
export class SampleWidget1Component implements OnInit {
  @Input()
  widgetId: number = 0;

  @Input()
  description: string = '';

  constructor() {}

  ngOnInit() {
    console.log('SampleWidget1Component ngOnInit');
  }
}
