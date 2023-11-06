import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import {RouterModule, Routes} from "@angular/router";
import {NavbarModule} from "../../modules/navbar/navbar.module";
import {FooterModule} from "../../modules/footer/footer.module";
import {RegisterCompanyModule} from "../../modules/active-campaign-forms/register-company/register-company.module";


const routes: Routes = [{
  path: '',
  component: AboutUsComponent
}]

@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavbarModule,
    FooterModule,
    RegisterCompanyModule
  ]
})
export class AboutUsModule { }
