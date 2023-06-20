import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private url="http://localhost:3000/userauthentication"
  constructor(private http:HttpClient) {}
  getUsers(user:any){
    return this.http.post(this.url+'/login/:email',user)
  }
  addUser(user:any){
    return this.http.post(this.url+'/register',user)
  }
  updateUser(user: any, email: string) {
    return this.http.put(this.url + '/update/' + email, user);
  }  
  deleteUser(user:any){
    return this.http.delete(this.url+'/delete/'+user)
  }
  getAllUsers(user:any) {
    return this.http.get<any[]>(`${this.url}/users`);
  }
  getUserByEmail(email:any){
    return this.http.get(this.url+'/getuser/'+email)
  }
}