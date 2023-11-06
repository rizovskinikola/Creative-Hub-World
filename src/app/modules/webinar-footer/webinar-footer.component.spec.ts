import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarFooterComponent } from './webinar-footer.component';

describe('WebinarFooterComponent', () => {
  let component: WebinarFooterComponent;
  let fixture: ComponentFixture<WebinarFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebinarFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebinarFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
