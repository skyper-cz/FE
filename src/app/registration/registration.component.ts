import { Component } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  title = 'Register';

  nickname = '';
  heslo = '';
  name = '';
  age: number;
  description = '';
  skills = '';
  Prijmuto = false;


  constructor(private apiService: UserService) {
  }

  createUser(): void {
    this.apiService.registerUser({name: this.name, nick: this.nickname, age: this.age, description: this.description, skills: this.skills});
  }
}
