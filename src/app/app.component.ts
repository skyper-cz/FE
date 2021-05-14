import { Component } from '@angular/core';
import {UserService} from './user.service';
import {UserComponent} from "./user/user.component";

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
  };
}
