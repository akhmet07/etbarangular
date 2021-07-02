import { Component, HostListener, Input, OnInit } from '@angular/core';

export type menuTriggerTypes = 'click' | 'hover';

@Component({
  selector: 'app-dropdownmenu',
  template: `
    <div class="dropdown">
	    <div>
        <app-button text="DropDownMenu" [isActive]=isOpen (click)="changeOpenedState()">
        </app-button>
      </div>
      <div class="menu-wrapper" *ngIf="isOpen">
        <app-menu></app-menu>
      </div>
    </div>
  `,
  styles: [
  ]
})

export class DropdownmenuComponent implements OnInit {
  @Input() isOpen = false;

  @Input() trigger = 'click';
  
  constructor() { }

  ngOnInit(): void {
  }

  changeOpenedState() {
    console.log("im here");
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
