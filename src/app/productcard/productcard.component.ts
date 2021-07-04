import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { product } from '../data/product.data';
import { Product } from '../types/card';

@Component({
  selector: 'app-productcard',
  template: `
    <div class="productcard">
      <div class="card__inner">
        <app-bage class="card__bage" [bage]="product?.bage"></app-bage>
        <figure class="card__gallery">
          <img class="card__gallery-image" [src]="product?.image"/>
        </figure>
        <div class="productcard__company">{{product?.company}}</div>
        <div class="productcard__title">{{product?.title}}</div>
        <div class="productcard__rates">
          <app-rate [rating] = "product?.rating?.value"></app-rate>
          <span class="productcard__reviews">{{product?.rating?.reviews}} отзыва</span>
        </div>
        <app-price [price] = "product?.price"></app-price>
        <div>Доставка {{availability}}</div>
        <div class="productcard_actions">
          <!-- <app-button-icon></app-button-icon> -->
          <app-button text="В корзину" [isActive]="isFavorite" (click)="toggleFavorite()"></app-button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .productcard {padding: 14px 10px; }
    .card__gallery-image{ height:200px; }
    /*:host ::ng-deep{ app-button > p > button { width: 100%; } } .productcard_actions { border: solid 1px black; }*/
    .productcard__company { font-size: 16px; }
    .productcard__title { font-weight: bold;font-size: 18px;}
    .productcard__rates { display: flex; -webkit-box-align: center;align-items: center; }
    .productcard__reviews {  padding: 4px 10px;}
   `
  ]
})
export class ProductcardComponent implements OnInit, OnChanges {

  @Input() product?: Product = product;

  isFavorite = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (product) {
      this.isFavorite = false;
    }
  }

  get availability(): string {
    return this.product?.availability ? $localize`availabile` : $localize`not availabile`
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
