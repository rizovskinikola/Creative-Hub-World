import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterCompanyComponent } from './register-company.component';



@NgModule({
  declarations: [
    RegisterCompanyComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RegisterCompanyComponent
  ]
})
export class RegisterCompanyModule { }
