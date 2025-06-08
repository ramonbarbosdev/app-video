import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardroom } from './cardroom';

describe('Cardroom', () => {
  let component: Cardroom;
  let fixture: ComponentFixture<Cardroom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cardroom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cardroom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
