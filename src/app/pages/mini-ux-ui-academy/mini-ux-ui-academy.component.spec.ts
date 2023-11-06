import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniUxUiAcademyComponent } from './mini-ux-ui-academy.component';

describe('MiniUxUiAcademyComponent', () => {
  let component: MiniUxUiAcademyComponent;
  let fixture: ComponentFixture<MiniUxUiAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniUxUiAcademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniUxUiAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
