import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramRequirementsComponent } from './program-requirements.component';

describe('ProgramRequirementsComponent', () => {
  let component: ProgramRequirementsComponent;
  let fixture: ComponentFixture<ProgramRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramRequirementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
