import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {UserData} from "./UserData";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  myMap: Map<number, string> = new Map();
  userService: UserService;
  users: UserData[];


  constructor(service: UserService) {
    this.userService = service;
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((user) => {
      this.users = user;
    })
  }
}
