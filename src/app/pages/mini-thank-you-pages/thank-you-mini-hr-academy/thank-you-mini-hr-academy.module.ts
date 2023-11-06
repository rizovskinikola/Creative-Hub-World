import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThankYouMiniHrAcademyComponent } from './thank-you-mini-hr-academy.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{
  path: '',
  component: ThankYouMiniHrAcademyComponent
}]

@NgModule({
  declarations: [ThankYouMiniHrAcademyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ThankYouMiniHrAcademyComponent
  ]
})
export class ThankYouMiniHrAcademyModule { }
