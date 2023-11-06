import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UpworkLeadGraphicComponent} from "./upwork-lead-graphic.component";


@NgModule({
  declarations: [
    UpworkLeadGraphicComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UpworkLeadGraphicComponent,
    UpworkLeadGraphicComponent
  ]
})
export class UpworkLeadGraphicModule {
}
