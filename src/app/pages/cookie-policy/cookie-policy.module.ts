import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookiePolicyComponent } from './cookie-policy.component';
import {RouterModule, Routes} from "@angular/router";
import { FooterModule } from 'src/app/modules/footer/footer.module';
import { NavbarModule } from 'src/app/modules/navbar/navbar.module';

const routes: Routes = [{
  path: '',
  component: CookiePolicyComponent
}]

@NgModule({
  declarations: [
    CookiePolicyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FooterModule,
    NavbarModule
  ]
})
export class CookiePolicyModule { }
