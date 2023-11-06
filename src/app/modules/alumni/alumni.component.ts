import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.scss']
})
export class AlumniComponent implements OnInit {

  @Input() companiesBg!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
