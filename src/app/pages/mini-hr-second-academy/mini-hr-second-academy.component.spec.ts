import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniHrSecondAcademyComponent } from './mini-hr-second-academy.component';

describe('MiniHrSecondAcademyComponent', () => {
  let component: MiniHrSecondAcademyComponent;
  let fixture: ComponentFixture<MiniHrSecondAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniHrSecondAcademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniHrSecondAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
