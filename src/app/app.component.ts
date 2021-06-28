import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'etbar';
  inCard = 0;
  apiUrl = `${environment.api}`;

  addToCard() {
    this.inCard += 1;
  }

  removeFromCard() {
    return this.inCard > 0 ? this.inCard -= 1 : this.inCard
  }
}
