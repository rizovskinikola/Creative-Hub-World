import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { ThankYouMiniCodeInformationComponent } from './thank-you-mini-code-information.component';

const routes: Routes = [{
  path: '',
  component: ThankYouMiniCodeInformationComponent
}]
@NgModule({
  declarations: [ThankYouMiniCodeInformationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ThankYouMiniCodeInformationComponent
  ]
})
export class ThankYouMiniCodeInformationModule { }
