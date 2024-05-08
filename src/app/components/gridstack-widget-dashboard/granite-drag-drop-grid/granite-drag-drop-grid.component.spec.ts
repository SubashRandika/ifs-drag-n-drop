/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GraniteDragDropGridComponent } from './granite-drag-drop-grid.component';

describe('GraniteDragDropGridComponent', () => {
  let component: GraniteDragDropGridComponent;
  let fixture: ComponentFixture<GraniteDragDropGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraniteDragDropGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraniteDragDropGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
