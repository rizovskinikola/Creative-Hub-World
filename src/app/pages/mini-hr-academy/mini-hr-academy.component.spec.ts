import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniHrAcademyComponent } from './mini-hr-academy.component';

describe('MiniHrAcademyComponent', () => {
  let component: MiniHrAcademyComponent;
  let fixture: ComponentFixture<MiniHrAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniHrAcademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniHrAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
