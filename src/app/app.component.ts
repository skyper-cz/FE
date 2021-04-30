import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FE';
  searchText;
  public menu = {
    '/' : 'Home',
    uzivatele: 'Uzivatele',
    Registrace: 'Registrace',
  };
}
