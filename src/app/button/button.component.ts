import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <p>
      {{text}}
    </p>
  `,
  styles: [
  ]
})
export class ButtonComponent implements OnInit {

  @Input() text = 'Click me'

  constructor() { }

  ngOnInit(): void {
  }

}
