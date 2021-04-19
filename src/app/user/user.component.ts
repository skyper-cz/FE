import {Component, OnInit} from '@angular/core';

//import {UserData} from './UserData';

interface UserData {
  nick: string;
  name: string;
  age: number;
  experience: string;
  skills: string;


}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  myMap: Map<number, string> = new Map();
  users: UserData[] = [
    {nick: "Monareccio", name: "Martin Macura", age: 23, skills: "Umí skvěle spamovat lidi v discordu\n hraje warthuinder a lolko", experience: "ANgular"},
    {nick: "Spermious Sam", name: "Spamuel Codytech", age: 22, skills: "Top messenger spammer a ignorer", experience: "webíky a bložísky"},

  ];

  constructor() {
    /*this.myMap = new Map();*/

  }

  ngOnInit(): void {
  }

  /*
    addUserData(): void{
      this.isEditing = !this.isEditing;
      console.log(this.text);
      this.userData = this.text.split('\n');
      this.userExperience = this.text2.split('\n');
      this.userSkills = this.text3.split('\n');
    }*/

}
