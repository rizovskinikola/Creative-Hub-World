import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HackathonsComponent} from './hackathons.component';
import {RouterModule, Routes} from "@angular/router";
import {NavbarModule} from "../../modules/navbar/navbar.module";
import {FooterModule} from "../../modules/footer/footer.module";
import {HackathonsFormComponent} from "../../modules/active-campaign-forms/hackathons-form/hackathons-form.component";


const routes: Routes = [{
  path: '',
  component: HackathonsComponent
}]

@NgModule({
  declarations: [
    HackathonsComponent,
    HackathonsFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavbarModule,
    FooterModule
  ]
})
export class HackathonsModule {
}
