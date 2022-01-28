import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymemtComponent } from './paymemt.component';

describe('PaymemtComponent', () => {
  let component: PaymemtComponent;
  let fixture: ComponentFixture<PaymemtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymemtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymemtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
