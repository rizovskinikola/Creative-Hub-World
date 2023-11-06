export class Pricing{
    constructor(
        public pricing_name:string | null,
        public just_bootcamp:boolean = false,
        public cpd_certified:boolean = false,
        public total_transformation:boolean = false
    ){}
}

export class PricingHeader{
    constructor(
        public pricing_name:string | null,
        public pricing_classes:number | null,
        public pricing_price:number | null,
        public pricing_price_full:number | null,
    ){}
}