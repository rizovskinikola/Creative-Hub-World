import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarHeaderComponent } from './webinar-header.component';

describe('WebinarHeaderComponent', () => {
  let component: WebinarHeaderComponent;
  let fixture: ComponentFixture<WebinarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebinarHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebinarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
