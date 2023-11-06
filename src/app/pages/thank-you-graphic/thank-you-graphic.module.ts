import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThankYouGraphicComponent } from './thank-you-graphic.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{
  path: '',
  component: ThankYouGraphicComponent
}]

@NgModule({
  declarations: [ThankYouGraphicComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ThankYouGraphicModule { }
