import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymemtOptionsComponent } from './paymemt-options.component';

describe('PaymemtOptionsComponent', () => {
  let component: PaymemtOptionsComponent;
  let fixture: ComponentFixture<PaymemtOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymemtOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymemtOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
