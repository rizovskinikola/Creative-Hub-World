import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedArticlesSliderComponent } from './featured-articles-slider.component';

describe('FeaturedArticlesSliderComponent', () => {
  let component: FeaturedArticlesSliderComponent;
  let fixture: ComponentFixture<FeaturedArticlesSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedArticlesSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedArticlesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
