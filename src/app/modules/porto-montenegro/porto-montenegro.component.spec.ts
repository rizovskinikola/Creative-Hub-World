import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortoMontenegroComponent } from './porto-montenegro.component';

describe('PortoMontenegroComponent', () => {
  let component: PortoMontenegroComponent;
  let fixture: ComponentFixture<PortoMontenegroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortoMontenegroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortoMontenegroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
