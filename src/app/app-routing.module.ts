import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'graphic-design-bootcamp',
    loadChildren: () => import('./pages/graphic-design/graphic-design.module').then(m => m.GraphicDesignModule)
  },
  {
    path: 'data-science-bootcamp',
    loadChildren: () => import('./pages/data-science/data-science.module').then(m => m.DataScienceModule)
  },
  {
    path: 'front-end-bootcamp',
    loadChildren: () => import('./pages/front-end/front-end.module').then(m => m.FrontEndModule)
  },
  {
    path: 'bootcamp',
    loadChildren: () => import('./pages/bootcamp/bootcamp.module').then(m => m.BootcampModule)
  },
  {
    path: 'hackathons',
    loadChildren: () => import('./pages/hackathons/hackathons.module').then(m => m.HackathonsModule)
  },
  // {
  //   path: 'about-us',
  //   loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule)
  // },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then(m => m.NewsModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule)
  },
  {
    path: 'cookies-policy',
    loadChildren: () => import('./pages/cookie-policy/cookie-policy.module').then(m => m.CookiePolicyModule)
  },
  {
    path: 'community-guidelines',
    loadChildren: () => import('./pages/community-guidelines/community-guidelines.module').then(m => m.CommunityGuidelinesModule)
  },
  {
    path: 'program-requirements',
    loadChildren: () => import('./pages/program-requirements/program-requirements.module').then(m => m.ProgramRequirementsModule)
  },
  {
    path: 'under-construction',
    loadChildren: () => import('./pages/under-construction/under-construction.module').then(m => m.UnderConstructionModule)
  },
  {
    path: 'formtest',
    loadChildren: () => import('./pages/formtest/formtest.module').then(m => m.FormtestModule)
  },
  {
    path: 'graphic-design-webinar',
    loadChildren: () => import('./pages/graphic-design-webinar/graphic-design-webinar.module').then(m => m.GraphicDesignWebinarModule)
  },
  {
    path: 'data-science-webinar',
    loadChildren: () => import('./pages/data-science-webinar/data-science-webinar.module').then(m => m.DataScienceWebinarModule)
  },
  {
    path: 'thank-you-graphic',
    loadChildren: () => import('./pages/thank-you-graphic/thank-you-graphic.module').then(m => m.ThankYouGraphicModule)
  },
  {
    path: 'thank-you-data',
    loadChildren: () => import('./pages/thank-you-data/thank-you-data.module').then(m => m.ThankYouDataModule)
  },
  {
    path: 'thank-you-wheel',
    loadChildren: () => import('./pages/thank-you-wheel/thank-you-wheel.module').then(m => m.ThankYouWheelModule)
  },
  {
    path: 'thank-you-career',
    loadChildren: () => import('./pages/thank-you-career/thank-you-career.module').then(m => m.ThankYouCareerModule)
  },
  {
    path: 'mini-code-academy',
    loadChildren: () => import('./pages/mini-code-academy/mini-code-academy.module').then(m => m.MiniCodeAcademyModule)
  },
  {
    path: 'mini-hr-academy',
    loadChildren: () => import('./pages/mini-hr-academy/mini-hr-academy.module').then(m => m.MiniHrAcademyModule)
  },
  {
    path: 'mini-go-to-academy',
    loadChildren: () => import('./pages/mini-go-to-academy/mini-go-to-academy.module').then(m => m.MiniGoToAcademyModule)
  },
  {
    path: 'mini-digital-marketing-academy',
    loadChildren: () => import('./pages/mini-digital-marketing-academy/mini-digital-marketing-academy.module').then(m => m.MiniDigitalMarketingAcademyModule)
  },
    {
    path: 'thank-you-mini-code-academy',
    loadChildren: () => import('./pages/mini-thank-you-pages/thank-you-mini-code-academy/thank-you-mini-code-academy.module').then(m => m.ThankYouMiniCodeAcademyModule)
  },
  {
    path: 'thank-you-mini-code-information',
    loadChildren: () => import('./pages/mini-thank-you-pages/thank-you-mini-code-information/thank-you-mini-code-information.module').then(m => m.ThankYouMiniCodeInformationModule)
  },
  {
    path: 'thank-you-mini-digital-marketing-academy',
    loadChildren: () => import('./pages/mini-thank-you-pages/thank-you-mini-digital-marketing-academy/thank-you-mini-digital-marketing-academy.module').then(m => m.ThankYouMiniDigitalMarketingAcademyModule)
  },
  {
    path: 'thank-you-mini-digital-marketing-information',
    loadChildren: () => import('./pages/mini-thank-you-pages/thank-you-mini-digital-marketing-information/thank-you-mini-digital-marketing-information.module').then(m => m.ThankYouMiniDigitalMarketingInformationModule)
  },
  {
    path: 'thank-you-mini-go-to-market-academy',
    loadChildren: () => import('./pages/mini-thank-you-pages/thank-you-mini-go-to-market-academy/thank-you-mini-go-to-market-academy.module').then(m => m.ThankYouMiniGoToMarketAcademyModule)
  },
  {
    path: 'thank-you-mini-go-to-market-information',
    loadChildren: () => import('./pages/mini-thank-you-pages/thank-you-mini-go-to-market-information/thank-you-mini-go-to-market-information.module').then(m => m.ThankYouMiniGoToMarketInformationModule)
  },
  {
    path: 'thank-you-mini-hr-academy',
    loadChildren: () => import('./pages/mini-thank-you-pages/thank-you-mini-hr-academy/thank-you-mini-hr-academy.module').then(m => m.ThankYouMiniHrAcademyModule)
  },
  {
    path: 'thank-you-mini-hr-information',
    loadChildren: () => import('./pages/mini-thank-you-pages/thank-you-mini-hr-information/thank-you-mini-hr-information.module').then(m => m.ThankYouMiniHrInformationModule)
  },
  {
    path: 'mini-ux-ui-academy',
    loadChildren: () => import('./pages/mini-ux-ui-academy/mini-ux-ui-academy.module').then(m => m.MiniUxUiAcademyModule)
  },
  {
    path: 'thank-you-mini-ux-ui-academy',
    loadChildren: () => import('./pages/mini-thank-you-pages/thank-you-mini-ux-ui-academy/thank-you-mini-ux-ui-academy.module').then(m => m.ThankYouMiniUxUiAcademyModule)
  },
  {
    path: 'thank-you-mini-ux-ui-information',
    loadChildren: () => import('./pages/mini-thank-you-pages/thank-you-mini-ux-ui-information/thank-you-mini-ux-ui-information.module').then(m => m.ThankYouMiniUxUiInformationModule)
  },
  {
    path: 'hr-mini-academy',
    loadChildren: () => import('./pages/mini-hr-second-academy/mini-hr-second-academy.module').then(m => m.MiniHrSecondAcademyModule)
  },
  {
    path: 'enterprise',
    loadChildren: () => import('./pages/enterprise/enterprise.module').then(m => m.EnterpriseModule)
  },
  {
    path: 'digital-marketing',
    loadChildren: () => import('./pages/digital-marketing/digital-marketing.module').then(m => m.DigitalMarketingModule)
  },
  // {
  //   path: '**',
  //   loadChildren: () => import('./pages/under-construction/under-construction.module').then(m => m.UnderConstructionModule)
  // },
  {
    path: 'test',
    loadChildren: () => import('./pages/wheel-test/wheel-test.module').then(m => m.WheelTestModule)
  },
  
  
];
// RouterModule.forRoot([
//   { path:"resume", redirectTo: '../assets/intro-to-data-science.pdf' },
// ])

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabled',
    scrollOffset: [0, 0],
    anchorScrolling: "enabled",
})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
