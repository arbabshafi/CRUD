import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
public userDB:any[]=[
    {firstName:'Arbab',lastName:'Shafi',email:'arbabshafi81@gmail.com',address:'Pampore',password:'a',confirmPassword:'a'},
    {firstName:'Farhaz',lastName:'Shafi',email:'farhazshafi81@gmail.com',address:'Srinagar',password:'a',confirmPassword:'a'},
    {firstName:'Lubna',lastName:'Shafi',email:'lubnashafi81@gmail.com',address:'Konibal',password:'a',confirmPassword:'a'},
];
}
