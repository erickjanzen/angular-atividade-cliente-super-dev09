import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCamposBasico } from './form-campos-basico';

describe('FormCamposBasico', () => {
  let component: FormCamposBasico;
  let fixture: ComponentFixture<FormCamposBasico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCamposBasico],
    }).compileComponents();

    fixture = TestBed.createComponent(FormCamposBasico);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
