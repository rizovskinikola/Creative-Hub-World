import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpFrontComponent } from './sign-up-front.component';

describe('SignUpFrontComponent', () => {
  let component: SignUpFrontComponent;
  let fixture: ComponentFixture<SignUpFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
