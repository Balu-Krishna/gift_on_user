import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorystoresComponent } from './categorystores.component';

describe('CategorystoresComponent', () => {
  let component: CategorystoresComponent;
  let fixture: ComponentFixture<CategorystoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorystoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorystoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
