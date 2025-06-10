import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSample } from './select-sample';

describe('SelectSample', () => {
  let component: SelectSample;
  let fixture: ComponentFixture<SelectSample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectSample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectSample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
