import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitalMarketingComponent } from './digital-marketing.component';
import { RouterModule, Routes} from "@angular/router";
import { NavbarModule } from 'src/app/modules/navbar/navbar.module';
import { CarouselModule} from "ngx-owl-carousel-o";
import { QuestionsAndAnswersModule } from 'src/app/modules/questions-and-answers/questions-and-answers.module';
import { PricingModule } from 'src/app/modules/pricing/pricing.module';
import { AskYourEmployerModule } from 'src/app/modules/active-campaign-forms/ask-your-employer/ask-your-employer.module';
import { UsFirstClassFreeModule } from 'src/app/modules/active-campaign-forms/us-first-class-free/us-first-class-free.module';
import { FooterModule } from 'src/app/modules/footer/footer.module';
import {MatTabsModule} from '@angular/material/tabs';


const routes: Routes = [{
  path: '',
  component: DigitalMarketingComponent
}]

@NgModule({
  declarations: [
    DigitalMarketingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavbarModule,
    CarouselModule,
    QuestionsAndAnswersModule,    
    PricingModule,
    AskYourEmployerModule,
    UsFirstClassFreeModule,
    FooterModule,
    MatTabsModule
    
  ]
})
export class DigitalMarketingModule { }
