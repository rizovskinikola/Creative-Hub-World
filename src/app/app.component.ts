import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'creativehub-world';
  clicked: boolean = true;
  platformId: string;

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    this.platformId = platformId;
  }

  displayCounter(clicked: boolean) {
    this.clicked = clicked;
  }

  onRouterActivate(ev: Event): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
