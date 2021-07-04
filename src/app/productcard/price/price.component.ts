import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductPrice } from 'src/app/types/card';

@Component({
  selector: 'app-price',
  template: `
    <div class="price__discount" [ngClass]="{ 'price__discount-hidden': !price?.discount }">
      <div class="price__prev">{{price?.value}} тенге 
        <span class="price__discount-bage">- {{discount}}%</span>
      </div>
    </div>
    <div class="price">{{newPrice}} тенге</div>
  `,
  styles: [`.price__discount{padding: 4px 0px;} .price__discount-bage{background-color: red;} .price__discount-hidden{ display: none;}
            .price{ font-weight: bold; padding: 4px 0px;}`
  ]
})
export class PriceComponent implements OnInit, OnChanges {

  @Input() price?: ProductPrice;

  newPrice?: number;
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.price) {
      this.newPrice = this.price?.discount ? this.price?.value * (1-this.price?.discount) : this.price?.value
    }
  }

  get discount(): number {
    return (this.price?.discount ? this.price.discount * 100 : 0);
  }

}
