import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
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

