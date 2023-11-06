import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterpriseComponent } from './enterprise.component';
import { RouterModule, Routes } from "@angular/router";
import { NavbarModule } from 'src/app/modules/navbar/navbar.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { IntroToDataScienceComponent } from './intro-to-data-science/intro-to-data-science.component';
import { IntroToBusinessAnalysisComponent } from './intro-to-business-analysis/intro-to-business-analysis.component';
import { ExcelDataAnalysisComponent } from './excel-data-analysis/excel-data-analysis.component';


const routes: Routes = [{
  path: '',
  component: EnterpriseComponent
},
{
  path: 'intro-to-data-science',
  loadChildren: () => import('./intro-to-data-science/intro-to-data-science.module')
    .then(m => m.IntroToDataScienceModule)
},
{
  path: 'excel-data-analysis',
  loadChildren: () => import('./excel-data-analysis/excel-data-analysis.module')
    .then(m => m.ExcelDataAnalysisModule)
}
]

@NgModule({
  declarations: [EnterpriseComponent, IntroToDataScienceComponent, IntroToBusinessAnalysisComponent, ExcelDataAnalysisComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavbarModule,
    CarouselModule
  ]
})
export class EnterpriseModule { }




