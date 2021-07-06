import { Component, EventEmitter, HostListener, Input, OnInit, Output, SimpleChanges } from '@angular/core';

export type menuTriggerTypes = 'click' | 'hover';

@Component({
  selector: 'app-dropdownmenu',
  template: `
    <div class="dropdown">
	    <div>
        <div class="dropdown__bage" *ngIf='inCard.length !== 0'>{{inCard.length}}</div>
        <app-button [text]=text [isActive]=isOpen color="accent" [isDisable]=isDisabled (click)="changeOpenedState()">
        </app-button>
      </div>
      <div class="menu-wrapper" *ngIf="isOpen">
        <!-- <app-menu></app-menu> -->
        <div class="menu__header">
          Общая стоимость {{amount | number}} тенге, со скидкой {{discount | percent}}
        </div>
        <div class="menu__icon" (click)="changeOpenedState()">
          <span class="material-icons app-icon">close</span>
        </div>
        <div class="menu__data">
          <div *ngFor="let item of inCard" class="menu__data__item">
            <div class="menu_data_content">
              <div>
                <img width="60px" src="{{item.product.image}}">
              </div>
              <div>{{item.product.company}}</div>
              <div>{{item.product.title}}</div>
            </div>
            <div class="menu__icon" (click)="remove(item.product)">
              <span class="material-icons app-icon">remove</span>
            </div>
          </div>
        </div>
        <div class="menu__actions">
          <app-button color="primary" text="Оформить заказ" (click)="clearAll()"></app-button>
          <app-button text="Очистить" (click)="clearAll()"></app-button>
        </div>
      </div>
    </div>
  `,
  styles: [`.menu__data__item{ display: flex; padding: 14px 10px; } .menu__actions{display: flex;}
  .menu__icon{margin-left: auto; cursor: pointer;}
  .dropdown__bage {
    font-size: 10px;
    line-height: 13px;
    text-transform: uppercase;
    color: #fff;
    text-align: center;
    display: inline-block;
    min-width: 16px;
    height: 16px;
    position: absolute;
    top: 70px;
    background: #f55123;
    padding: 2px 3px 1px;
    border-radius: 16px;
  }`
  ]
})

export class DropdownmenuComponent implements OnInit {
  
  @Input() text = 'DropDownMenu'

  @Input() isOpen = false;

  @Input() trigger = 'click';
  
  @Input() inCard: Array<any> = [];

  opened = false;
  isDisabled = false;
  amount = 0;
  discount = 0;

  @Output() removeProduct = new EventEmitter<any>();
  @Output() clear =  new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes);
    const { inCard } = changes;
    //console.log(inCard);
    this.isDisabled = inCard.currentValue.length === 0;
    
    if (inCard && inCard.currentValue && inCard.currentValue.length > 0) {
      this.amount = inCard.currentValue
      .map((x: any) => x.product.price.value * (1 - (x.product.price.discount? x.product.price.discount:0)))
      .reduce((previous: any, current: any) => { return previous + current} );

      this.discount = inCard.currentValue
      .map((x: any) => (x.product.price.discount? x.product.price.discount: 0))
      .reduce((previous: any, current: any) => { return previous + current} );
    } else
      this.amount = 0;
  }

  open() {
    this.opened = !this.opened;
  }

  remove(item: any) {
    this.removeProduct.emit(item);
  }

  clearAll() {
    this.amount = 0;
    this.discount = 0;
    this.clear.emit();
  }

  changeOpenedState() {
    if (this.trigger === 'click') {
      this.isOpen = !this.isOpen
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.trigger === 'hover') {
      this.isOpen = true
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.trigger === 'hover') {
      this.isOpen = false
    }
  }

}