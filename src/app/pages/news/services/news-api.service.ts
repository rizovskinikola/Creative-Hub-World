import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {filter, map, Observable, tap} from "rxjs";
import {Article} from "../models/article.model";
import {Category} from "../models/category.model";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  baseApi: string = 'https://api.creativehub.mk/api/v1/blog/';

  constructor(private httpClient: HttpClient) {
  }

  getArticles(): Observable<Article[]> {
    return this.httpClient.get(this.baseApi + 'articles')
      .pipe(map((res: any) => res.data.map((item: any) => new Article(item))))
  }

  getArticle(id: string): Observable<Article> {
    return this.httpClient.get(this.baseApi + 'articles/' + id)
      .pipe(map((res: any) => new Article(res.data)));
  }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get(this.baseApi + 'categories')
      .pipe(map((res: any) => res.data.map((item: any) => new Category(item))));
  }
}
