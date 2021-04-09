import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }
  HttpPostRegistrace(username: string, heslo: string, name: string, popis: string, skills: string): Observable<any> {
    return this.httpClient.post('http://127.0.0.1:8080/BE/UserApi/users/create', {
      username,
      heslo,
      name,
      popis,
      skills
    });
  }
  HttpPostAPozadavek(UzivatelskeJmeno: string, Heslo: string): Observable<any> {
    return this.httpClient.post('', {
      UzivatelskeJmeno,
      Heslo
    });
  }
  HttpGetPozadavek(UzivatelskeJmeno: string, Heslo: string): Observable<any> {
    return this.httpClient.post('', {
      UzivatelskeJmeno,
      Heslo
    });
  }
}

