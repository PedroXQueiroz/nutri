import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintPagePage } from './print-page.page';

describe('PrintPagePage', () => {
  let component: PrintPagePage;
  let fixture: ComponentFixture<PrintPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
