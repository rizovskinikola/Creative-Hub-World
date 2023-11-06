import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniAcademyInfoComponent } from './mini-academy-info.component';

describe('MiniAcademyInfoComponent', () => {
  let component: MiniAcademyInfoComponent;
  let fixture: ComponentFixture<MiniAcademyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniAcademyInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniAcademyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
