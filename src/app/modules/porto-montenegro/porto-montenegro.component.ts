import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-porto-montenegro',
  templateUrl: './porto-montenegro.component.html',
  styleUrls: ['./porto-montenegro.component.scss']
})
export class PortoMontenegroComponent implements OnInit {

  @Input() levarageColor!: string ;
  constructor() { }

  ngOnInit(): void {
  }

}
