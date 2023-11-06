import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-webinar-footer',
  templateUrl: './webinar-footer.component.html',
  styleUrls: ['./webinar-footer.component.scss']
})
export class WebinarFooterComponent implements OnInit {

  @Input() footerBg!: string;
  @Input() linkToAcademy!: string;
  @Input() goToBg!: string;
  @Input() whichAcademy!: string;
  @Input() goToColor!: string;
  @Input() goToBorder!: string;
  @Input() helpText!: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

}
