import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpDataComponent } from './sign-up-data.component';

describe('SignUpDataComponent', () => {
  let component: SignUpDataComponent;
  let fixture: ComponentFixture<SignUpDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
