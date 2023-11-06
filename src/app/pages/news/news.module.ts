import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsComponent} from './news.component';
import {RouterModule, Routes} from "@angular/router";
import {NavbarModule} from "../../modules/navbar/navbar.module";
import {FooterModule} from "../../modules/footer/footer.module";
import {FeaturedArticlesSliderComponent} from './featured-articles-slider/featured-articles-slider.component';
import {CategoryComponent} from "./category/category.component";
import {ArticleComponent} from './article/article.component';
import {ArticleViewComponent} from './article-view/article-view.component';
import {PageLoaderModule} from "../../shared/page-loader/page-loader.module";
import {Meta} from "@angular/platform-browser";


const routes: Routes = [
  {
    path: '',
    component: NewsComponent
  },
  {
    path: ':articleAlias',
    component: ArticleViewComponent
  },
  {
    path: 'category/:categoryAlias',
    component: CategoryComponent
  }
]

@NgModule({
  declarations: [
    NewsComponent,
    FeaturedArticlesSliderComponent,
    CategoryComponent,
    ArticleComponent,
    ArticleViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavbarModule,
    FooterModule,
    PageLoaderModule
  ],
  providers: [
    Meta
  ]
})
export class NewsModule {
}
