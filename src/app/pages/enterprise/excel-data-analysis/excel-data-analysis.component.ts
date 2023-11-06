import { Component, OnInit } from '@angular/core';
import { pdf } from './excel-data-analysis';

@Component({
  selector: 'app-excel-data-analysis',
  templateUrl: './excel-data-analysis.component.html',
  styleUrls: ['./excel-data-analysis.component.scss']
})
export class ExcelDataAnalysisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    pdf();
  }
}
