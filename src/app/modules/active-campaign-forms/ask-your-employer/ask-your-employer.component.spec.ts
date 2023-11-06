import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskYourEmployerComponent } from './ask-your-employer.component';

describe('AskYourEmployerComponent', () => {
  let component: AskYourEmployerComponent;
  let fixture: ComponentFixture<AskYourEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskYourEmployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskYourEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
