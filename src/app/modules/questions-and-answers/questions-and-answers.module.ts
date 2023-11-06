import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuestionsAndAnswersComponent} from "./questions-and-answers.component";


@NgModule({
  declarations: [
    QuestionsAndAnswersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QuestionsAndAnswersComponent
  ]
})
export class QuestionsAndAnswersModule {
}
