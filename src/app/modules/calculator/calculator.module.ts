import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalculatorComponent} from "./calculator.component";


@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalculatorComponent
  ]
})
export class CalculatorModule {
}
