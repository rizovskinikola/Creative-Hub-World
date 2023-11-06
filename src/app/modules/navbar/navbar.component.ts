import {Component, ElementRef, ViewChild, Input} from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @ViewChild('mainMobileMenu') mainMobileMenu!: ElementRef;
  @ViewChild('bootcampDropDown') bootcampDropDown!: ElementRef;
  @Input() showLightNavbar: boolean = false;
  @Input() from_where!:string;

  whiteHamburgerIcon: string = 'assets/hamburger-menu-white.svg';
  whiteCircleLogo: string = 'assets/logo-circle-white.svg';
  whiteNavbarBg: string = 'rgba(0, 0, 0, 0.75)';
  blackHamburgerIcon: string = 'assets/hamburger-menu-black.svg';
  blackCircleLogo: string = 'assets/logo-circle-black.svg';
  blackNavbarBg: string = 'rgba(244, 243, 236, 0.9)';

  openNav() {
    this.mainMobileMenu.nativeElement.style.height = "100vh";
  }

  closeNav() {
    this.mainMobileMenu.nativeElement.style.height = "0";
  }



  dropDown() {
    this.bootcampDropDown.nativeElement.style.display = "block"
  }


  hideDropDown() {
    this.bootcampDropDown.nativeElement.style.display = "none"
  }


}
