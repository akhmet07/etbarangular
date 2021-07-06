import { Component, Input, OnInit } from '@angular/core';
import { ProductBage } from '../../types/card';

@Component({
  selector: 'app-bage',
  template: `
    <div class="bage" [style.background-color]="bage?.color">
      {{bage?.text}}
    </div>
  `,
  styles: [`.bage {    
    min-height: 16px;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.8px;
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
    text-transform: uppercase;}`
  ]
})
export class BageComponent implements OnInit {

  @Input() bage?: ProductBage;

  constructor() { }

  ngOnInit(): void {
  }

}
