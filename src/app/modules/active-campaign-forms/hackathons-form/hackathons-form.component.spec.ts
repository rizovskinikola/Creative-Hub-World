import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonsFormComponent } from './hackathons-form.component';

describe('HackathonsFormComponent', () => {
  let component: HackathonsFormComponent;
  let fixture: ComponentFixture<HackathonsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackathonsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HackathonsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
