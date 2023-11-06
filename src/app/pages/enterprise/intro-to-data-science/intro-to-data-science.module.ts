import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { IntroToDataScienceComponent } from './intro-to-data-science.component';
import { NavbarModule } from 'src/app/modules/navbar/navbar.module';

const routes: Routes = [{
  path: '',
  component: IntroToDataScienceComponent 
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavbarModule
    
  ]
})
export class IntroToDataScienceModule { }





