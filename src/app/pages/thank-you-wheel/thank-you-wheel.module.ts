import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThankYouWheelComponent } from './thank-you-wheel.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{
  path: '',
  component: ThankYouWheelComponent
}]

@NgModule({
  declarations: [ThankYouWheelComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ThankYouWheelModule { }
