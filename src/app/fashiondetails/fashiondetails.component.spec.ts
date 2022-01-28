import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashiondetailsComponent } from './fashiondetails.component';

describe('FashiondetailsComponent', () => {
  let component: FashiondetailsComponent;
  let fixture: ComponentFixture<FashiondetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashiondetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FashiondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
