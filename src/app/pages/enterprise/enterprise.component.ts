import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { contactUs} from './enterprise';
import { ViewportScroller } from "@angular/common";

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.scss']
})
export class EnterpriseComponent implements OnInit {
  constructor(private scroller: ViewportScroller) {}
  
  from_where:string ="enterprise";
  goDown1() {
    this.scroller.scrollToAnchor("contactUsForm");
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: false,
    navSpeed: 700,
    nav: false,
    navText: [""],
    responsive: {
      0: {
        items: 1.5
      },
      400: {
        items: 1.5
      },
      740: {
        items: 1.5
      },
      940: {
        items: 3
      }
    },

  }

  satisfiedOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: false,
    navSpeed: 700,
    nav: false,
    navText: [""],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },

  }


  ngOnInit(): void {
  }
  ngAfterViewInit() {
    contactUs();
  }


}
