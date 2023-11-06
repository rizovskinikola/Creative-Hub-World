import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcampAcademyCardComponent } from './bootcamp-academy-card.component';

describe('BootcampAcademyCardComponent', () => {
  let component: BootcampAcademyCardComponent;
  let fixture: ComponentFixture<BootcampAcademyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootcampAcademyCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootcampAcademyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
