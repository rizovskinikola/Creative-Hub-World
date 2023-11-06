import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicDesignWebinarComponent } from './graphic-design-webinar.component';

describe('GraphicDesignWebinarComponent', () => {
  let component: GraphicDesignWebinarComponent;
  let fixture: ComponentFixture<GraphicDesignWebinarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicDesignWebinarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicDesignWebinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
