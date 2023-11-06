import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebinarContainerComponent } from './webinar-container.component';


@NgModule({
  declarations: [
    WebinarContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WebinarContainerComponent
  ]
})
export class WebinarContainerModule { }
