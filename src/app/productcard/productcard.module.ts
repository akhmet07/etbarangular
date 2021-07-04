import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductcardComponent } from './productcard.component';
import { ButtonModule } from '../button/button.module';
import { BageModule } from '../productcard/bage/bage.module';
import { RateModule } from '../productcard/rate/rate.module';
import { PriceModule } from './price/price.module';



@NgModule({
  declarations: [
    ProductcardComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BageModule,
    RateModule,
    PriceModule
  ],
  exports: [
    ProductcardComponent
  ],
})
export class ProductcardModule { }
