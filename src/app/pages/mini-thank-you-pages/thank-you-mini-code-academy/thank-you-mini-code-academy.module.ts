import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThankYouMiniCodeAcademyComponent } from './thank-you-mini-code-academy.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{
  path: '',
  component: ThankYouMiniCodeAcademyComponent
}]

@NgModule({
  declarations: [ThankYouMiniCodeAcademyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ThankYouMiniCodeAcademyComponent
  ]
})
export class ThankYouMiniCodeAcademyModule { }
