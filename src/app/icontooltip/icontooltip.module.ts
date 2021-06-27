import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IcontooltipComponent } from './icontooltip.component';
import { ImageModule } from '../image/image.module';
import { TooltipModule } from '../tooltip/tooltip.module';



@NgModule({
  declarations: [
    IcontooltipComponent
  ],
  imports: [
    CommonModule,
    ImageModule,
    TooltipModule
  ],
  exports: [
    IcontooltipComponent
  ],
})
export class IcontooltipModule { }
