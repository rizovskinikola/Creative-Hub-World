import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlumniComponent} from "./alumni.component";


@NgModule({
  declarations: [
    AlumniComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlumniComponent
  ]
})
export class AlumniModule {
}
