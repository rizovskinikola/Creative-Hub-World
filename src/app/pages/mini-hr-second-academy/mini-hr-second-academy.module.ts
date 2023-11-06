import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { MiniHrSecondAcademyComponent } from './mini-hr-second-academy.component';
import { MiniAcademyInfoModule } from 'src/app/modules/mini-academy-info/mini-academy-info.module';
import { MiniAcademyProgramAndPriceModule } from 'src/app/modules/mini-academy-program-and-price/mini-academy-program-and-price.module';


const routes: Routes = [{
  path: '',
  component: MiniHrSecondAcademyComponent
}]

@NgModule({
  declarations: [
    MiniHrSecondAcademyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MiniAcademyInfoModule,
    MiniAcademyProgramAndPriceModule
  ]
})
export class MiniHrSecondAcademyModule { }
