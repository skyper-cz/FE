import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  nickname = '';
  heslo = '';
  message = '';
  isLogInValid;

  constructor(private apiService: UserService) { }

  ngOnInit(): void {
    this.apiService.init();
  }

  tryToLogIn(){
    this.message = this.apiService.isValid(this.nickname,this.heslo);
  }

}
