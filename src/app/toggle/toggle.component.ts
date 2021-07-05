import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

export interface Toggle {
  label: string;
  value: string | number;
}

@Component({
  selector: 'app-toggle',
  template: `
    <div style="display: flex;">
      <div *ngFor="let item of toggles">
        <app-button *ngIf="item.value !== ''" [text]="item.label" [isActive] = 'item === selected' (click)="selectedChanged(item)"></app-button>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ToggleComponent implements OnInit {
  @Input() toggles: Array<Toggle> = [];
  @Input() selected?: Toggle;
  @Output() toogleChanged = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  selectedChanged(item: Toggle) {
    this.selected = item;
    this.toogleChanged.emit(item);
  }
}
