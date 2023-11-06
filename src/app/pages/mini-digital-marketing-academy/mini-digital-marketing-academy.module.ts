import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniDigitalMarketingAcademyComponent } from './mini-digital-marketing-academy.component';
import {RouterModule, Routes} from "@angular/router";
import { MiniAcademyInfoModule } from 'src/app/modules/mini-academy-info/mini-academy-info.module';
import { MiniAcademyProgramAndPriceModule } from 'src/app/modules/mini-academy-program-and-price/mini-academy-program-and-price.module';

const routes: Routes = [{
  path: '',
  component: MiniDigitalMarketingAcademyComponent
}]

@NgModule({
  declarations: [MiniDigitalMarketingAcademyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MiniAcademyInfoModule,
    MiniAcademyProgramAndPriceModule
  ]
})
export class MiniDigitalMarketingAcademyModule { }
