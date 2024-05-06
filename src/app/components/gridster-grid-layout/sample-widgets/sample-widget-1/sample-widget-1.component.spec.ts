/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SampleWidget-1Component } from './sample-widget-1.component';

describe('SampleWidget-1Component', () => {
  let component: SampleWidget-1Component;
  let fixture: ComponentFixture<SampleWidget-1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleWidget-1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleWidget-1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
