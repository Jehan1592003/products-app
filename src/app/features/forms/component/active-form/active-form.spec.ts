import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveForm } from './active-form';

describe('ActiveForm', () => {
  let component: ActiveForm;
  let fixture: ComponentFixture<ActiveForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ActiveForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
