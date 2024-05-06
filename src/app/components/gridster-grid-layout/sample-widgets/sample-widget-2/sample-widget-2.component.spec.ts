/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SampleWidget-2Component } from './sample-widget-2.component';

describe('SampleWidget-2Component', () => {
  let component: SampleWidget-2Component;
  let fixture: ComponentFixture<SampleWidget-2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleWidget-2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleWidget-2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
