import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { NavbarModule } from 'src/app/modules/navbar/navbar.module';
import { ExcelDataAnalysisComponent } from './excel-data-analysis.component';

const routes: Routes = [{
  path: '',
  component: ExcelDataAnalysisComponent
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavbarModule
  ]
})
export class ExcelDataAnalysisModule { }
