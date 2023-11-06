import { Component, Input, OnInit } from '@angular/core';
import { Pricing, PricingHeader } from './pricing.model';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  
  @Input() array_of_pricing_header!:  Array<PricingHeader>; 
  @Input() array_of_pricing!:  Array<Pricing>; 
  @Input() pricingTextBg!: string;
  @Input() workoutSessionColor!: string;
  @Input() annualPricingBg!: string;
  // @Input() pricingGradientBg!: string;
  // @Input() bestOfferBg!:string
  @Input() 
  //for mobile
  @Input() array_of_bootcamp!:  Array<string>;
  @Input() array_of_cpd!:  Array<string>;
  @Input() array_of_transformation!:  Array<string>;
  @Input() from_where!:string;
  @Input() payJustAcademy!: string;
  @Input() payTravelAcademy!: string;
  @Input() payTotalAcademy!: string;


  constructor() { }

  ngOnInit(): void {
  }

}
