import { Component, OnInit } from '@angular/core';
import { initFirstClassFree } from './us-first-class-free';
@Component({
  selector: 'app-us-first-class-free',
  templateUrl: './us-first-class-free.component.html',
  styleUrls: ['./us-first-class-free.component.scss']
})
export class UsFirstClassFreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {

    initFirstClassFree();

  }
}
