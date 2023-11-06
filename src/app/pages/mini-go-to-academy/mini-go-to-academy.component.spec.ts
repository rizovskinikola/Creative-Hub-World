import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniGoToAcademyComponent } from './mini-go-to-academy.component';

describe('MiniGoToAcademyComponent', () => {
  let component: MiniGoToAcademyComponent;
  let fixture: ComponentFixture<MiniGoToAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniGoToAcademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniGoToAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
