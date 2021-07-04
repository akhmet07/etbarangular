import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu, 'ru');
import { Product } from './types/card';
import { product, products  } from './data/product.data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  apiUrl = `${environment.api}`;

  title = 'etbar';
  i = 0;
  product: Product = products[this.i];
  inCard = 0;
  
  addToCard() {
    this.inCard += 1;
  }

  removeFromCard() {
    return this.inCard > 0 ? this.inCard -= 1 : this.inCard
  }

  next() {
    console.log('next')
    this.i = this.i < products.length -1 ? this.i+1 : 0;
    this.product = products[this.i];
  }
}
