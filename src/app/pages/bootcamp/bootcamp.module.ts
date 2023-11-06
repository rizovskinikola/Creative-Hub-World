import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BootcampComponent} from './bootcamp.component';
import {RouterModule, Routes} from "@angular/router";
import {NavbarModule} from "../../modules/navbar/navbar.module";
import {FooterModule} from "../../modules/footer/footer.module";
import { BootcampAcademyCardComponent } from './bootcamp-academy-card/bootcamp-academy-card.component';


const routes: Routes = [{
  path: '',
  component: BootcampComponent
}]

@NgModule({
  declarations: [
    BootcampComponent,
    BootcampAcademyCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavbarModule,
    FooterModule
  ]
})
export class BootcampModule {
}
