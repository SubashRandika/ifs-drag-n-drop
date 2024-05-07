import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sample-widget-2',
  templateUrl: './sample-widget-2.component.html',
  styleUrls: ['./sample-widget-2.component.css'],
})
export class SampleWidget2Component implements OnInit {
  @Input()
  widgetId: number = 0;

  @Input()
  description: string = '';

  constructor() {}

  ngOnInit() {
    console.log('SampleWidget2Component ngOnInit');
  }
}
