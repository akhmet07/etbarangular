import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate',
  template: `<span class="rating">
  <input type="checkbox" id="st5" value="5" [attr.checked]="isChecked(5)" readonly/><label for="st5"></label>
  <input type="checkbox" id="st4" value="4" [attr.checked]="isChecked(4)" readonly/><label for="st4"></label>
  <input type="checkbox" id="st3" value="3" [attr.checked]="isChecked(3)" readonly/><label for="st3"></label>
  <input type="checkbox" id="st2" value="2" [attr.checked]="isChecked(2)" readonly/><label for="st2"></label>
  <input type="checkbox" id="st1" value="1" [attr.checked]="isChecked(1)" readonly/><label for="st1"></label>
</span>
  `,
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {

  @Input() rating?:number;

  constructor() { }

  ngOnInit(): void {
  }

  isChecked(val: number) {
    return this.rating === val ? '' : null;
  }
}
