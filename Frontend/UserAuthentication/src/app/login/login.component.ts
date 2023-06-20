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
  userLogin(){
   this.userService.getUsers(this.user).subscribe((res:any)=>{
    if(res.status==200){
      alert(res.msg)
      this.router.navigateByUrl('/usertable')
    }
    else{
      alert(res.msg)
      this.router.navigateByUrl('/register')
    }
   })
  }
}
