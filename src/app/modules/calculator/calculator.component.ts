import { Component, Input, OnInit } from '@angular/core';
import { chooseAcademy, chooseInstallments } from './calculator.model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  
  
  
  @Input() arrayOfAccademy!: Array<chooseAcademy> ;
  @Input() arrayOfInstallments!: Array<chooseInstallments>;
  @Input() choose_bg!: string;
  @Input() borders_bg!: string;
  @Input() borderBottomCalc!: string;


  
  currentAcademy?: string ;
  currentInstallments?: any ;
  currentMonthPrice?: any  ;
  currentAcademyPrice: any;

  calcAcademy(academy:any){
    this.currentAcademy = academy.name;
    this.currentAcademyPrice = academy.price;
    this.currentMonthPrice = Math.floor( academy.price / this.currentInstallments);
      if(this.currentInstallments === 'at once'){
        this.currentMonthPrice = this.currentAcademyPrice;
      }
      else if(!this.currentInstallments){
        this.currentMonthPrice = this.currentAcademyPrice;
      }
      else{
        this.currentMonthPrice = Math.floor(this.currentAcademyPrice/ this.currentInstallments)
      }
    }
    calcInstallment(installments:any){
        this.currentInstallments = installments.month;  
        if(installments.month === 'at once'){
          this.currentMonthPrice = this.currentAcademyPrice;
        }
        else{
          this.currentMonthPrice = Math.floor(this.currentAcademyPrice/ this.currentInstallments)
        }
      }


  constructor() { }

  ngOnInit(): void {
  this.currentAcademy = this.arrayOfAccademy[0].name;
  this.currentMonthPrice =  this.arrayOfAccademy[0].price;
  this.currentAcademyPrice =  this.arrayOfAccademy[0].price;
  }
}
