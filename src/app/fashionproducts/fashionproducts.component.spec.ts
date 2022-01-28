import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionproductsComponent } from './fashionproducts.component';

describe('FashionproductsComponent', () => {
  let component: FashionproductsComponent;
  let fixture: ComponentFixture<FashionproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
