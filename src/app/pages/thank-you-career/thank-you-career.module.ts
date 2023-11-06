import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThankYouCareerComponent } from './thank-you-career.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{
  path: '',
  component: ThankYouCareerComponent
}]

@NgModule({
  declarations: [ThankYouCareerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ThankYouCareerModule { }
