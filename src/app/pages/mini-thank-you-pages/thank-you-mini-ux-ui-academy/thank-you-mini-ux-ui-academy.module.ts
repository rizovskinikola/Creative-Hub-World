import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { ThankYouMiniUxUiAcademyComponent } from './thank-you-mini-ux-ui-academy.component';

const routes: Routes = [{
  path: '',
  component: ThankYouMiniUxUiAcademyComponent
}]

@NgModule({
  declarations: [ThankYouMiniUxUiAcademyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ThankYouMiniUxUiAcademyComponent
  ]
})
export class ThankYouMiniUxUiAcademyModule { }
