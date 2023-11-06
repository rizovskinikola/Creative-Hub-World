import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCodeAcademyComponent } from './mini-code-academy.component';

describe('MiniCodeAcademyComponent', () => {
  let component: MiniCodeAcademyComponent;
  let fixture: ComponentFixture<MiniCodeAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCodeAcademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCodeAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
