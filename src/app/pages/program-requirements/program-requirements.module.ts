import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/app/modules/navbar/navbar.module';
import { FooterModule } from 'src/app/modules/footer/footer.module';
import {RouterModule, Routes} from "@angular/router";
import { ProgramRequirementsComponent } from './program-requirements.component';

const routes: Routes = [{
  path: '',
  component: ProgramRequirementsComponent 
}]



@NgModule({ 
  declarations: [
    ProgramRequirementsComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    FooterModule,
    RouterModule.forChild(routes),
  ]
})
export class ProgramRequirementsModule { }
