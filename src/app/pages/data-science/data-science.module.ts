import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataScienceComponent} from "./data-science.component";
import {RouterModule, Routes} from "@angular/router";
import {NavbarModule} from "../../modules/navbar/navbar.module";
import {MatRadioModule} from "@angular/material/radio";
import {UpworkLeadDataScienceModule} from "../../modules/active-campaign-forms/upwork-lead-data-science/upwork-lead-data-science.module";
import {FreeCourseDataScienceModule} from "../../modules/active-campaign-forms/free-coruse-data-science/free-course-data-science.module";
import {CarouselModule} from "ngx-owl-carousel-o";
import {PricingModule} from "../../modules/pricing/pricing.module";
// import {CalculatorModule} from "../../modules/calculator/calculator.module";
import {AlumniModule} from "../../modules/alumni/alumni.module";
import {CommunityModule} from "../../modules/community/community.module";
import {FormModule} from "../../modules/form/form.module";
import {QuestionsAndAnswersModule} from "../../modules/questions-and-answers/questions-and-answers.module";
import {FooterModule} from "../../modules/footer/footer.module";
import { RegisterCompanyModule } from 'src/app/modules/active-campaign-forms/register-company/register-company.module';
import { SignUpDataModule } from 'src/app/modules/active-campaign-forms/sign-up-data/sign-up-data.module';
import { PortoMontenegroModule } from 'src/app/modules/porto-montenegro/porto-montenegro.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [{
  path: '',
  component: DataScienceComponent
}]

@NgModule({
  declarations: [
    DataScienceComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavbarModule,
    MatRadioModule,
    UpworkLeadDataScienceModule,
    FreeCourseDataScienceModule,
    CarouselModule,
    PricingModule,
    // CalculatorModule,
    AlumniModule,
    CommunityModule,
    FormModule,
    QuestionsAndAnswersModule,
    FooterModule,
    RegisterCompanyModule,
    SignUpDataModule,
    PortoMontenegroModule, 
    // BrowserAnimationsModule
    LazyLoadImageModule

  ]
})
export class DataScienceModule {
}
