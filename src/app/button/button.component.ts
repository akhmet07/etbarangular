import { unescapeIdentifier } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <p>
      <button class="{{newcolor}} {{newfontsize}}" [class.active]=isActive [disabled]="isCheckDisable()">{{text}}</button>
    </p>
  `,
  styles: [`button {all: unset; cursor: pointer; border: 1px solid #c6cacc; 
    font: 600 14px/20px Inter, sans-serif; padding: 7px 16px; border-radius: 2px; text-align: center; display: block; 
    &:hover {border:1px solid #1a73ef; background-color: #1a73ef;}} 
    .active{background-color: red} 
    .primary{color: #AB274F;} 
    .accent{color: #9966CC;}
    .success{color: #7FFFD4;}
    .warning{color: #FF2400;}
    .large{font-size: 16px}
    .small{font-size: 12px}`
  ]
})
export class ButtonComponent implements OnInit {

  @Input() text = 'Click me'
  
  @Input() newcolor = 'default'

  @Input() newfontsize = 'default'

  @Input() set color(val: string) {
    this.newcolor = val
  }

  @Input() set size(val: string) {
    this.newfontsize = val
  }

  @Input() isActive = false

  @Input() isDisable = false

  constructor() { }

  ngOnInit(): void {
  }


  isCheckDisable() {
    return this.isDisable ? this.isDisable : null
  }

}
