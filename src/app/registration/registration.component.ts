import { Component } from '@angular/core';
import {UserService} from '../user.service';
import {UserComponent} from "../user/user.component";

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
  profilePic = '';
  Prijmuto = false;



  constructor(private apiService: UserService) {
  }

  createUser(): void {
    this.apiService.registerUser({name: this.name, password: this.heslo, nick: this.nickname, age: this.age, description: this.description, skills: this.skills, profilePic: this.profilePic});
    let form = document.getElementsByName('registration-form');
  }
}
