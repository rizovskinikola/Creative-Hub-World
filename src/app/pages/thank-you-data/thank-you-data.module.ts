import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThankYouDataComponent } from './thank-you-data.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{
  path: '',
  component: ThankYouDataComponent
}]

@NgModule({
  declarations: [ThankYouDataComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ThankYouDataModule { }
