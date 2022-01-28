import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceResultsComponent } from './voice-results.component';

describe('VoiceResultsComponent', () => {
  let component: VoiceResultsComponent;
  let fixture: ComponentFixture<VoiceResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
