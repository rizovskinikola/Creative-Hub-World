import {Component, OnDestroy, OnInit} from '@angular/core';
import {Article} from "../models/article.model";
import {NewsApiService} from "../services/news-api.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter, finalize, Subscription, switchMap} from "rxjs";
import {format} from "date-fns";
import {DomSanitizer, Meta} from "@angular/platform-browser";
import {Clipboard} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss'],
})
export class ArticleViewComponent implements OnInit, OnDestroy {
  footerBorder = 'linear-gradient(180deg, #FFBD11 0%, rgba(255, 255, 255, 0) 43.51%)'
  arrowBg = 'linear-gradient(162.44deg, #FFBD11 0%, #FF7A00 100%)'
  fetchingArticle: boolean = true;
  article!: Article | null;
  articleHTML!: any;
  allArticles!: Article[];
  articlesInCategory!: Article[];
  similarArticles!: Article[];
  articleIndex!: number;

  subscriptions: Subscription = new Subscription();

  constructor(private newsApiService: NewsApiService,
              private activatedRoute: ActivatedRoute,
              private sanitizer: DomSanitizer,
              private router: Router,
              private clipboard: Clipboard,
              private metaService: Meta) {
  }

  ngOnInit(): void {
    this.subscribeToRouteChange()
    this.getArticle();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  prevArticle(): void {
    const prevIndex = this.articleIndex === 0 ? (this.articlesInCategory.length - 1) : (this.articleIndex - 1)
    this.router.navigate(['/news/' + this.articlesInCategory[prevIndex].alias])
  }

  nextArticle(): void {
    const nextIndex = this.articleIndex === (this.articlesInCategory.length - 1) ? 0 : (this.articleIndex + 1)
    this.router.navigate(['/news/' + this.articlesInCategory[nextIndex].alias])
  }

  subscribeToRouteChange(): void {
    this.subscriptions.add(
      this.router.events.pipe(
        filter((event: any) => event instanceof NavigationEnd)
      ).subscribe(() => {
        this.getArticle();
      })
    )
  }

  formatDate(date: string): string {
    return format(new Date(date), "MMM dd, yyyy")
  }

  getArticle(): void {
    this.article = null;
    this.fetchingArticle = true;
    const alias = this.activatedRoute.snapshot.paramMap.get('articleAlias') || '';
    this.newsApiService.getArticles()
      .pipe(
        finalize(() => this.fetchingArticle = false),
        switchMap((articles: Article[]) => {
          this.allArticles = articles.filter((article: Article) => article.isPublished);
          const id = articles.find((article: Article) => article.alias === alias)?.id
          return this.newsApiService.getArticle(id || '')
        }))
      .subscribe({
        next: (article: Article) => {
          this.articleHTML = this.sanitizer.bypassSecurityTrustHtml(article.text)
          this.article = article
          this.setMetaTags();
          this.articlesInCategory = this.allArticles
            .filter((article: Article) => article.categoryId === this.article?.categoryId)
          this.similarArticles = this.articlesInCategory
            .filter((article: Article) => article.id !== this.article?.id)
            .slice(0, 4)
          this.articleIndex = this.articlesInCategory.findIndex((article: Article) => article.id === this.article?.id)
        }
      })
  }

  setMetaTags(): void {
    if (this.article) {
      this.metaService.addTags([
        {name: 'og:title', content: this.article.title},
        {name: 'og:description', content: this.article.description},
        {name: 'og:img', content: this.article.introImageUrl},
        {name: 'og:type', content: 'article'},
        {name: 'og:url', content: window.location.href}
      ])
    }
  }

  shareOnFacebook(): void {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href};src=sdkpreparse`,
      '_blank')
  }

  shareOnTwitter(): void {
    window.open(`https://twitter.com/intent/tweet?text=${this.article?.title} - ${window.location.href}`, '_blank')
  }

  shareOnLinkedIn(): void {
    window.open(`https://www.linkedin.com/shareArticle?mini=true
    &url=${window.location.href}
    &title=${this.article?.title}
    &summary=${this.article?.description}
    &source=creativehubacademy.co`, '_blank')
  }

  copyToClipboard(): void {
    this.clipboard.copy(window.location.href)
  }
}
