import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormtestComponent} from "./formtest.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [{
  path: '',
  component: FormtestComponent
}]

@NgModule({
  declarations: [
    FormtestComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FormtestModule {
}
