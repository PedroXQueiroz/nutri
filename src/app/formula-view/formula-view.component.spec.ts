import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaViewPage } from './formula-view.page';

describe('FormulaViewPage', () => {
  let component: FormulaViewPage;
  let fixture: ComponentFixture<FormulaViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
