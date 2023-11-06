import {Input, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) {
  }

  @Input() subscribeBorder!: string;
  @Input() arrowBg!: string;


  ngOnInit(): void {
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

}
