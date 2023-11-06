import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniAcademyInfoComponent } from './mini-academy-info.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MiniAcademyInfoComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MiniAcademyInfoComponent
  ]
})
export class MiniAcademyInfoModule { }
