import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { ThankYouMiniUxUiInformationComponent } from './thank-you-mini-ux-ui-information.component';

const routes: Routes = [{
  path: '',
  component: ThankYouMiniUxUiInformationComponent
}]

@NgModule({
  declarations: [ThankYouMiniUxUiInformationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: 
  [
    ThankYouMiniUxUiInformationComponent
  ]
})
export class ThankYouMiniUxUiInformationModule { }
