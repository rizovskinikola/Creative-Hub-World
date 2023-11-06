import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniHrAcademyComponent } from './mini-hr-academy.component';
import {RouterModule, Routes} from "@angular/router";
import { MiniAcademyInfoModule } from 'src/app/modules/mini-academy-info/mini-academy-info.module';
import { MiniAcademyProgramAndPriceModule } from 'src/app/modules/mini-academy-program-and-price/mini-academy-program-and-price.module';

const routes: Routes = [{
  path: '',
  component: MiniHrAcademyComponent
}]

@NgModule({
  declarations: [MiniHrAcademyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MiniAcademyInfoModule,
    MiniAcademyProgramAndPriceModule
  ]
})
export class MiniHrAcademyModule { }
