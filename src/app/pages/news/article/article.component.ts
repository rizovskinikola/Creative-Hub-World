import {Component, Input} from '@angular/core';
import {Article} from "../models/article.model";
import {format} from "date-fns";
import {Router} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  @Input() article!: Article;

  constructor(private router: Router) {
  }

  formatDateToMonth(date: string): string {
    return format(new Date(date), "MMM dd")
  }

  goToArticleView(): void {
    this.router.navigate(['/news/' + this.article.alias])
  }
}
