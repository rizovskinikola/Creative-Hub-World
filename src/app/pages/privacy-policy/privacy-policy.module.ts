import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { FooterModule } from 'src/app/modules/footer/footer.module';
import { NavbarModule } from 'src/app/modules/navbar/navbar.module';


const routes: Routes = [{
  path: '',
  component: PrivacyPolicyComponent
}]
@NgModule({
  declarations: [
    PrivacyPolicyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FooterModule,
    NavbarModule
  ]
})
export class PrivacyPolicyModule { }