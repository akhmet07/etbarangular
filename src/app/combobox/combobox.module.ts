import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboboxComponent } from './combobox.component';
import { ButtonModule } from '../button/button.module';



@NgModule({
  declarations: [
    ComboboxComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    ComboboxComponent
  ],
})
export class ComboboxModule { }
