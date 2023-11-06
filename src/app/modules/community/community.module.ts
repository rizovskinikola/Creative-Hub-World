import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommunityComponent} from "./community.component";


@NgModule({
  declarations: [
    CommunityComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommunityComponent
  ]
})
export class CommunityModule {
}
