import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-early-bird',
  templateUrl: './early-bird.component.html',
  styleUrls: ['./early-bird.component.scss']
})
export class EarlyBirdComponent implements OnInit {
  @Input() parentCount!:number;
  @Output() valueChange = new EventEmitter();
  clicked: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  valueChanged(){
    this.valueChange.emit(this.clicked);
  }
}
