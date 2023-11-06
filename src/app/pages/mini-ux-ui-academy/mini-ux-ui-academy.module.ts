import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { MiniUxUiAcademyComponent } from './mini-ux-ui-academy.component';
import { MiniAcademyInfoModule } from 'src/app/modules/mini-academy-info/mini-academy-info.module';
import { MiniAcademyProgramAndPriceModule } from 'src/app/modules/mini-academy-program-and-price/mini-academy-program-and-price.module';

const routes: Routes = [{
  path: '',
  component: MiniUxUiAcademyComponent
}]


@NgModule({
  declarations: [MiniUxUiAcademyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MiniAcademyInfoModule,
    MiniAcademyProgramAndPriceModule
  ]
})
export class MiniUxUiAcademyModule { }
