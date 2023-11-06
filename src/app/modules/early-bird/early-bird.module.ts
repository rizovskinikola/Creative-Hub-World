import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EarlyBirdComponent} from "./early-bird.component";


@NgModule({
  declarations: [
    EarlyBirdComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EarlyBirdComponent
  ]
})
export class EarlyBirdModule {
}
