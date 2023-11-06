import { Component, OnInit, Input } from '@angular/core';
import { LecturerCardInfo } from './webinar-container.model';
import { Testemonial } from './webinar-container.model';
@Component({
  selector: 'app-webinar-container',
  templateUrl: './webinar-container.component.html',
  styleUrls: ['./webinar-container.component.scss']
})
export class WebinarContainerComponent implements OnInit {
  
  @Input() lecturerImg!: string;
  @Input() firstListTitle!: string;
  @Input() array_of_requirements!: Array<string>;
  @Input() array_of_lecturer_card_info!: Array<LecturerCardInfo> ;
  @Input() array_of_skills_list!: Array<string>
  @Input() array_of_testemonial!: Array<Testemonial> ;
  @Input() array_of_benefits!: Array<string> ;
  @Input() didYouKnow!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
