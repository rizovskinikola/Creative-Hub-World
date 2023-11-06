import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpGraphicComponent } from './sign-up-graphic.component';

describe('SignUpGraphicComponent', () => {
  let component: SignUpGraphicComponent;
  let fixture: ComponentFixture<SignUpGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpGraphicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
