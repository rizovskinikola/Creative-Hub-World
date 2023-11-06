import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomepageComponent} from "./homepage.component";
import {RouterModule, Routes} from "@angular/router";
import {NavbarModule} from "../../modules/navbar/navbar.module";
import {FooterModule} from "../../modules/footer/footer.module";
import {CarouselModule} from "ngx-owl-carousel-o";
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CareerCoachingModule } from 'src/app/modules/active-campaign-forms/career-coaching/career-coaching.module';
import { WheelTestModule } from '../wheel-test/wheel-test.module';


const routes: Routes = [{
  path: '',
  component: HomepageComponent
}]

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavbarModule,
    FooterModule,
    CarouselModule,
    LazyLoadImageModule,
    CareerCoachingModule,
    WheelTestModule
  ]
})

export class HomepageModule {
}
