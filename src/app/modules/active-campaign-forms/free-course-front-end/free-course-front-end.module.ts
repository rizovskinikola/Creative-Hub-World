import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FreeCourseFrontEndComponent} from "./free-course-front-end.component";


@NgModule({
  declarations: [
    FreeCourseFrontEndComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FreeCourseFrontEndComponent
  ]
})
export class FreeCourseFrontEndModule {
}
