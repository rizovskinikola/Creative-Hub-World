import {Component, OnInit} from '@angular/core';
import {Article} from "../models/article.model";
import {NewsApiService} from "../services/news-api.service";
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs";
import {Category} from "../models/category.model";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  footerBorder = 'linear-gradient(180deg, #FFBD11 0%, rgba(255, 255, 255, 0) 43.51%)'
  arrowBg = 'linear-gradient(162.44deg, #FFBD11 0%, #FF7A00 100%)'
  articles: Article[] = [];
  categories: Category[] = [];
  categoryAlias!: string;
  selectedCategory!: Category | undefined;

  constructor(private newsApiService: NewsApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.categoryAlias = this.activatedRoute.snapshot.paramMap.get('categoryAlias') || '';
    this.getArticlesByCategory();
  }

  getArticlesByCategory(): void {
    this.newsApiService.getCategories().pipe(switchMap((categories: Category[]) => {
      this.categories = categories;
      return this.newsApiService.getArticles();
    })).subscribe({
      next: (articles: Article[]) => {
        const category = this.categories.find((category: Category) => category.alias === this.categoryAlias);
        this.selectedCategory = category;
        this.articles = articles.filter((article: Article) => article.categoryId === category?.id)
      }
    })
  }
}
