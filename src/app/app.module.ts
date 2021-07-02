import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ButtonModule } from './button/button.module';

import { ProductcardModule } from './productcard/productcard.module';
import { ComboboxModule } from './combobox/combobox.module';
import { IcontooltipModule } from './icontooltip/icontooltip.module';
import { MenusModule } from './menus/menus.module';
import { DropdownmenuModule } from './dropdownmenu/dropdownmenu.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    ProductcardModule,
    ComboboxModule,
    IcontooltipModule,
    MenusModule,
    DropdownmenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
