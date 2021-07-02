import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownmenuComponent } from './dropdownmenu.component';
import { ButtonModule } from '../button/button.module';
import { MenusModule } from '../menus/menus.module';



@NgModule({
  declarations: [
    DropdownmenuComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MenusModule
  ],
  exports: [DropdownmenuComponent]
})
export class DropdownmenuModule { }
