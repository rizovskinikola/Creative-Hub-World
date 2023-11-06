import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarContainerComponent } from './webinar-container.component';

describe('WebinarContainerComponent', () => {
  let component: WebinarContainerComponent;
  let fixture: ComponentFixture<WebinarContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebinarContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebinarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
