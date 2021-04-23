import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observable, Observable, of} from 'rxjs';
import {UserData} from './user/UserData';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: UserData[] = [
    {nick: "Monareccio", name: "Martin Macura", age: 23, skills: "Umí skvěle spamovat lidi v discordu\n hraje warthuinder a lolko", description: "ANgular"},
    {nick: "Spermious Sam", name: "Spamuel Codytech", age: 22, skills: "Top messenger spammer a ignorer", description: "webíky a bložísky"},
  ];

  getUsers(): Observable<UserData[]> {
    return of(this.users);
  }

  registerUser(user: UserData): Observable<void> {
    this.users.push(user);
    return of();
  }
}

