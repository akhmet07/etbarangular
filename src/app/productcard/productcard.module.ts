import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductcardComponent } from './productcard.component';
import { ButtonModule } from '../button/button.module';
import { BageModule } from '../productcard/bage/bage.module';
import { RateModule } from '../productcard/rate/rate.module';



@NgModule({
  declarations: [
    ProductcardComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BageModule,
    RateModule
  ],
  exports: [
    ProductcardComponent
  ],
})
export class ProductcardModule { }
