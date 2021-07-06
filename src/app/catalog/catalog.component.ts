import { Component, Input, OnInit } from '@angular/core';
import { Toggle } from '../toggle/toggle.component';
import { product, products  } from '../data/product.data';

@Component({
  selector: 'app-catalog',
  template: `
    <div class="catalog">
      <div><h2>Каталог товаров</h2></div>
      <div class="catalog__card">
        <app-dropdownmenu text="корзина" trigger='click' [inCard]='inCard' 
                          (removeProduct)='onRemoveProduct($event)' (clear)='onClear()'></app-dropdownmenu>
      </div>
    </div>

    <app-toggle [toggles]="buttons" (toogleChanged)="filter($event)"></app-toggle>
    
    <div style="display: flex; flex-wrap: wrap;">
      <div *ngFor="let item of filteredProductData">
        <app-productcard [product]="item" (addProduct)="onAddProduct($event)"></app-productcard>
      </div>
    </div>
  `,
  styles: [`.catalog{ display: flex;}
    .catalog__card{ margin-left: 250px; }`
  ]
})
export class CatalogComponent implements OnInit {
  
  inCard: Array<{count: number, product: any}> = [];

  productData: any;
  filteredProductData = [];

  buttons: Toggle[] = [
    {label: 'Показать все', value: 0},
    {label: 'В наличии', value: 1},
    {label: 'Со скидкой', value: 2},
    {label: 'По Акции', value: ''},
  ]
  
  constructor() { }

  ngOnInit(): void {
    this.productData = products;
    this.filteredProductData = this.productData;
  }

  onAddProduct($event: any): void {
    const c = this.inCard.filter(x => x.product === $event).length?? 0;
    //console.log("onAddProdduct: " + c);

    if (c === 0) {
      this.inCard.push({count: 1, product: $event})
    } else {
      const p = this.inCard.find(x => x.product === $event);
      if (p) p.count =  p.count + 1;
      //console.log("onAddProdduct: " + p);  
      this.onRemoveProduct($event);
    }

    this.inCard = [...this.inCard];
  }

  onRemoveProduct($event: any): void {
    const index = this.inCard.findIndex(x => x.product === $event);
    if (index !== -1) {
      this.inCard.splice(index, 1);
    }

    this.inCard = [...this.inCard]
  }

  onClear(): void {
    this.inCard = []
  }

  filter(item: Toggle) {
    if (item.value === 0) {
      this.filteredProductData = this.productData;
    } else if (item.value === 1) {
      this.filteredProductData = this.productData.filter((x: { availability: any; }) => x.availability);
    } else if (item.value === 2) {
      this.filteredProductData = this.productData.filter((x: { price: any; }) => x.price.discount);
    } else if (item.value === 3) {
      this.filteredProductData = this.productData.filter((x: { ispromo: any; }) => x.ispromo);
    }
  }
}
