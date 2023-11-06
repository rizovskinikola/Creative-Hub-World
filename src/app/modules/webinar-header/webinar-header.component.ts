import { Component, Input } from '@angular/core';
import { HeaderInfo } from './webinar-header.model';



@Component({
  selector: 'app-webinar-header',
  templateUrl: './webinar-header.component.html',
  styleUrls: ['./webinar-header.component.scss']
})
export class WebinarHeaderComponent {

  @Input() headerBackground!: string ;
  @Input() array_of_header_info!: Array<HeaderInfo> ;
  @Input() array_of_list!: Array<string> ;

  
  constructor() { }


}
