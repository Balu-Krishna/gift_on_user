import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoicecommandComponent } from './voicecommand.component';

describe('VoicecommandComponent', () => {
  let component: VoicecommandComponent;
  let fixture: ComponentFixture<VoicecommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoicecommandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoicecommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
