import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsFirstClassFreeComponent } from './us-first-class-free.component';

describe('UsFirstClassFreeComponent', () => {
  let component: UsFirstClassFreeComponent;
  let fixture: ComponentFixture<UsFirstClassFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsFirstClassFreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsFirstClassFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
