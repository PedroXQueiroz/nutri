import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverPasteValuePage } from './popover-paste-value.page';

describe('PopoverPasteValuePage', () => {
  let component: PopoverPasteValuePage;
  let fixture: ComponentFixture<PopoverPasteValuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverPasteValuePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverPasteValuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
