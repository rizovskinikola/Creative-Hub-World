import {Component, OnInit} from '@angular/core';
import {NewsApiService} from "./services/news-api.service";
import {Article} from "./models/article.model";
import {switchMap} from "rxjs";
import {Category} from "./models/category.model";
import {format, formatDistance} from 'date-fns';
import {Router} from "@angular/router";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  footerBorder = 'linear-gradient(180deg, #FFBD11 0%, rgba(255, 255, 255, 0) 43.51%)'
  arrowBg = 'linear-gradient(162.44deg, #FFBD11 0%, #FF7A00 100%)'
  featuredArticles!: Article[];
  allArticles!: Article[];
  categories!: Category[];
  articlesByCategory: Map<string, Article[]> = new Map<string, Article[]>();
  selectedFeaturedArticle!: Article;

  constructor(private newsApiService: NewsApiService, private router: Router) {
  }

  ngOnInit(): void {
    this.fetchArticles()
  }

  getTimeAgo(date: string): string {
    return formatDistance(new Date(date), new Date(), {
      addSuffix: true
    })
  }

  formatDateToMonth(date: string): string {
    return format(new Date(date), "MMM dd")
  }

  getCategoryNameById(id: string): string {
    return this.categories.filter((category: Category) => category.id === id)[0].title
  }

  getCategoryColorById(id: string): string {
    return this.categories.filter((category: Category) => category.id === id)[0].color
  }

  getCategoryAliasById(id: string): string {
    return this.categories.filter((category: Category) => category.id === id)[0].alias
  }

  fetchArticles(): void {
    this.newsApiService.getCategories().pipe(switchMap((categories: Category[]) => {
      this.categories = categories.filter((category: Category) => category.isPublished);
      this.categories.forEach((category: Category) => this.articlesByCategory.set(category.id, []))
      return this.newsApiService.getArticles()
    })).subscribe({
      next: (articles: Article[]) => {
        this.featuredArticles = articles.filter((article: Article) => article.isPublished && article.isFeatured)
        this.allArticles = articles.filter((article: Article) => article.isPublished)
          .sort((articleA: Article, articleB: Article) => new Date(articleB.published).getTime() - new Date(articleA.published).getTime())
        articles.filter((article: Article) => article.isPublished).forEach((article: Article) => {
          this.articlesByCategory.get(article.categoryId)?.push(article);
        })
        this.selectedFeaturedArticle = this.featuredArticles[0];
      }
    })
  }

  featuredArticleSelected(article: Article) {
    this.selectedFeaturedArticle = article;
  }

  goToCategory(categoryId: string): void {
    this.router.navigate(['news/category/' + this.getCategoryAliasById(categoryId)])
  }
}
