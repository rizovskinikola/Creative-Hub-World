import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GraphicDesignComponent} from "./graphic-design.component";
import {RouterModule, Routes} from "@angular/router";
import {NavbarModule} from "../../modules/navbar/navbar.module";
import {MatRadioModule} from "@angular/material/radio";
import {UpworkLeadGraphicModule} from "../../modules/active-campaign-forms/upwork-lead-graphic/upwork-lead-graphic.module";
import {PricingModule} from "../../modules/pricing/pricing.module";
// import {CalculatorModule} from "../../modules/calculator/calculator.module";
// import {CalendlyModule} from "../../modules/calendly/calendly.module";
import {CarouselModule} from "ngx-owl-carousel-o";
import {AlumniModule} from "../../modules/alumni/alumni.module";
import {CommunityModule} from "../../modules/community/community.module";
import {FormModule} from "../../modules/form/form.module";
import {QuestionsAndAnswersModule} from "../../modules/questions-and-answers/questions-and-answers.module";
import {FooterModule} from "../../modules/footer/footer.module";
import {MatDialogModule} from "@angular/material/dialog";
import { RegisterCompanyModule } from 'src/app/modules/active-campaign-forms/register-company/register-company.module';
import { FreeCourseGraphicModule } from 'src/app/modules/active-campaign-forms/free-course-graphic/free-course-graphic.module';
import { SignUpGraphicModule } from 'src/app/modules/active-campaign-forms/sign-up-graphic/sign-up-graphic.module';
import { PortoMontenegroModule } from 'src/app/modules/porto-montenegro/porto-montenegro.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';


const routes: Routes = [{
  path: '',
  component: GraphicDesignComponent
}]

@NgModule({
  declarations: [
    GraphicDesignComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavbarModule,
    MatRadioModule,
    UpworkLeadGraphicModule,
    PricingModule,
    // CalculatorModule,
    // CalendlyModule,
    CarouselModule,
    AlumniModule,
    CommunityModule,
    FormModule,
    QuestionsAndAnswersModule,
    FooterModule,
    MatDialogModule,
    RegisterCompanyModule,
    FreeCourseGraphicModule,
    SignUpGraphicModule,
    PortoMontenegroModule,
    LazyLoadImageModule
  ]
})

export class GraphicDesignModule {
}
