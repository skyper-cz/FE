import { Component, OnInit } from '@angular/core';
import {UserData} from './UserData';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  myMap: Map<number, string> = new Map();
  text;
  text2;
  text3;
  isEditing = false;
  userData: string[] = [];
  userExperience: string[] = [];
  userSkills: string[] = [];

  constructor() {
    /*this.myMap = new Map();*/

  }

  ngOnInit(): void {
  }

  addUserData(): void{
    this.isEditing = !this.isEditing;
    console.log(this.text);
    this.userData = this.text.split('\n');
    this.userExperience = this.text2.split('\n');
    this.userSkills = this.text3.split('\n');
  }

}
