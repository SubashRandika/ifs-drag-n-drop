/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GraniteDropGridComponent } from './granite-drop-grid.component';

describe('GraniteDropGridComponent', () => {
  let component: GraniteDropGridComponent;
  let fixture: ComponentFixture<GraniteDropGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraniteDropGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraniteDropGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
