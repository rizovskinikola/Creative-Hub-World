import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniAcademyProgramAndPriceComponent } from './mini-academy-program-and-price.component';

describe('MiniAcademyProgramAndPriceComponent', () => {
  let component: MiniAcademyProgramAndPriceComponent;
  let fixture: ComponentFixture<MiniAcademyProgramAndPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniAcademyProgramAndPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniAcademyProgramAndPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
