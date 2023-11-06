import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WheelTestComponent } from './wheel-test.component';
import {RouterModule, Routes} from "@angular/router";


// const routes: Routes = [{
//   path: '',
//   component:  WheelTestComponent
// }]

@NgModule({
  declarations: [
    WheelTestComponent
  ],
  imports: [
    CommonModule,
    // RouterModule.forChild(routes)
  ], 
  exports: [
    WheelTestComponent
  ]
})
export class WheelTestModule { }
