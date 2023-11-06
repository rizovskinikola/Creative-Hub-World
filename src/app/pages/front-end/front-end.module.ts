import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FrontEndComponent} from "./front-end.component";
import {RouterModule, Routes} from "@angular/router";
import {NavbarModule} from "../../modules/navbar/navbar.module";
import {MatRadioModule} from "@angular/material/radio";
import {UpworkLeadFrontEndModule} from "../../modules/active-campaign-forms/upwork-lead-front-end/upwork-lead-front-end.module";
import {PricingModule} from "../../modules/pricing/pricing.module";
// import {CalculatorModule} from "../../modules/calculator/calculator.module";
import {AlumniModule} from "../../modules/alumni/alumni.module";
import {CommunityModule} from "../../modules/community/community.module";
import {FormModule} from "../../modules/form/form.module";
import {QuestionsAndAnswersModule} from "../../modules/questions-and-answers/questions-and-answers.module";
import {FooterModule} from "../../modules/footer/footer.module";
import {RegisterCompanyModule} from 'src/app/modules/active-campaign-forms/register-company/register-company.module';
import {FreeCourseFrontEndModule} from "../../modules/active-campaign-forms/free-course-front-end/free-course-front-end.module";
import { SignUpFrontModule } from 'src/app/modules/active-campaign-forms/sign-up-front/sign-up-front.module';
import { PortoMontenegroModule } from 'src/app/modules/porto-montenegro/porto-montenegro.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';


const routes: Routes = [{
  path: '',
  component: FrontEndComponent
}]

@NgModule({
  declarations: [
    FrontEndComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavbarModule,
    MatRadioModule,
    UpworkLeadFrontEndModule,
    PricingModule,
    // CalculatorModule,
    AlumniModule,
    CommunityModule,
    FormModule,
    QuestionsAndAnswersModule,
    FooterModule,
    RegisterCompanyModule,
    FreeCourseFrontEndModule,
    SignUpFrontModule,
    PortoMontenegroModule,
    LazyLoadImageModule
  ]
})
export class FrontEndModule {
}
