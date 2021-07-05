import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { ProductcardModule } from '../productcard/productcard.module';
import { ToggleModule } from '../toggle/toggle.module';
import { DropdownmenuModule } from '../dropdownmenu/dropdownmenu.module';


@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule, ProductcardModule, ToggleModule, DropdownmenuModule
  ],
  exports: [CatalogComponent]
})
export class CatalogModule { }
