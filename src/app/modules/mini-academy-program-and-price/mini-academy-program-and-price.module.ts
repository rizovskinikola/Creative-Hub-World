import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniAcademyProgramAndPriceComponent } from './mini-academy-program-and-price.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [MiniAcademyProgramAndPriceComponent],
  imports: [
    CommonModule,
    RouterModule
  ], 
  exports: [
    MiniAcademyProgramAndPriceComponent
  ]
})
export class MiniAcademyProgramAndPriceModule { }
