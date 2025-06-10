import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alertdialog } from './alertdialog';

describe('Alertdialog', () => {
  let component: Alertdialog;
  let fixture: ComponentFixture<Alertdialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alertdialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alertdialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
