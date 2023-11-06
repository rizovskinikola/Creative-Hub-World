import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent  {



  subscribeBorder: string ="linear-gradient(180deg, rgba(255, 189, 17, 1) 0%, rgba(255, 255, 255, 0) 100%)"
  arrowBg: string = "linear-gradient(223.57deg, #EF5DA8 46.58%, #FFDA44 110.23%)"
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: false,
    navSpeed: 700,
    margin: 44,
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
        items: 4
      }
    },

  }



  constructor(private router: Router) { }


}
