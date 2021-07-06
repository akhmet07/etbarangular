import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceComponent } from './price.component';
import { CustomCurrencyPipe } from '../../custom-currency.pipe';


@NgModule({
  declarations: [
    PriceComponent, CustomCurrencyPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PriceComponent
  ]
})
export class PriceModule { }
