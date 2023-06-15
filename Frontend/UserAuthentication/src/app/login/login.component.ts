import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../Service/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:any={email:'',password:''}
  constructor(private router:Router,private userService :UserserviceService){}
  userLogin() {
    const Login = this.userService.userDB.some((item:any)=> item.email == this.user.email && item.password == this.user.password)
    if (Login) {
      alert('Login Successfull')
      this.router.navigateByUrl('/usertable');
    } else {
      alert('Invalid Credentials!')
      this.user={}
    }
  }
}
