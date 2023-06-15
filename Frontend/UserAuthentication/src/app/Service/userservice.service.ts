import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  userDB:any = [
    {firstName:'Arbab',lastName:'Shafi',email:'arbabshafi81@gmail.com',address:'Pampore',password:'a',confirmPassword:'a'},
    {firstName:'Farhaz',lastName:'Shafi',email:'farhazshafi81@gmail.com',address:'Srinagar',password:'a',confirmPassword:'a'},
    {firstName:'Lubna',lastName:'Shafi',email:'lubnashafi81@gmail.com',address:'Konibal',password:'a',confirmPassword:'a'},
  ];
  private url="http://localhost:3000/userauthentication"
  constructor(private http:HttpClient) {}
  getUsers() {
    return this.http.get(this.url);
  }
  }
