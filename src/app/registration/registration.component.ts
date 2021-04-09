import { Component } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  title = 'Register';

  username = '';
  heslo = '';
  name = '';
  popis = '';
  skills = '';

  Prijmuto = false;


  constructor(private apiService: UserService) {
  }

  VytvoritUzivatele(): void {
    this.apiService.HttpPostRegistrace(this.username, this.heslo, this.name, this.popis, this.skills).subscribe(() => {
      this.Prijmuto = true;
    });
  }
}
