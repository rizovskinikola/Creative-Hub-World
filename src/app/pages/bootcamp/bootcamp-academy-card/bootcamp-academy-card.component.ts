import {Component, Input, OnInit} from '@angular/core';

export interface AcademyOptions {
  key: string;
  title: string;
  image: string;
  lessonsNumber: number;
  color: string;
  borderColor: string;
  gradientStopColor1: string;
  gradientStopColor2: string;
  price: number;
  languageBgColor: string;
  routerLink: string;
}

@Component({
  selector: 'app-bootcamp-academy-card',
  templateUrl: './bootcamp-academy-card.component.html',
  styleUrls: ['./bootcamp-academy-card.component.scss']
})
export class BootcampAcademyCardComponent implements OnInit {
  @Input() academyOptions!: AcademyOptions;

  constructor() { }

  ngOnInit(): void {
  }

}
