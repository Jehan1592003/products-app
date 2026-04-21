import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveForms } from './active-forms';

describe('ActiveForms', () => {
  let component: ActiveForms;
  let fixture: ComponentFixture<ActiveForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveForms],
    }).compileComponents();

    fixture = TestBed.createComponent(ActiveForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
