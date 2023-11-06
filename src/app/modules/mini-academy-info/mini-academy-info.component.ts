import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mini-academy-info',
  templateUrl: './mini-academy-info.component.html',
  styleUrls: ['./mini-academy-info.component.scss']
})
export class MiniAcademyInfoComponent implements OnInit {

  @Input() blueListInfo !: string;
  @Input() array_of_blue_list!: Array<string>;
  @Input() array_of_time!: Array<string>;
  @Input() forWhoTitle!: string;
  @Input() array_of_for_who!: Array<string>

  constructor() { }

  ngOnInit(): void {
  }

}
