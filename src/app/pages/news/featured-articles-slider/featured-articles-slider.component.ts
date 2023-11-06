import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Article} from "../models/article.model";
import {Category} from "../models/category.model";
import {formatDistance} from "date-fns";

@Component({
  selector: 'app-featured-articles-slider',
  templateUrl: './featured-articles-slider.component.html',
  styleUrls: ['./featured-articles-slider.component.scss']
})
export class FeaturedArticlesSliderComponent {
  @Input() articles!: Article[];
  @Input() categories!: Category[];

  @Output() articleSelected: EventEmitter<Article> = new EventEmitter<Article>()

  getTimeAgo(date: string): string {
    return formatDistance(new Date(date), new Date(), {
      addSuffix: true
    })
  }

  getCategoryNameById(id: string): string {
    return this.categories.filter((category: Category) => category.id === id)[0].title
  }

  getCategoryColorById(id: string): string {
    return this.categories.filter((category: Category) => category.id === id)[0].color
  }

  selectArticle(article: Article) {
    this.articleSelected.emit(article);
  }
}
