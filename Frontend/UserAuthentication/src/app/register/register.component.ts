import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../Service/userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: any = {firstName:'',lastName:'',email:'',address:'',password:'',confirmPassword:'',};
  id:string |null
  constructor (private router:Router,private userservice:UserserviceService,private activatedroute:ActivatedRoute){}
  ngOnInit(){    
   this.id = this.activatedroute.snapshot.queryParamMap.get('ID')
   if(this.id)
   this.getUserDetails(this.id)
  }
  userReg() {
    const isEmailRegistered = this.userservice.userDB.some((user: any) => user.email === this.user.email);
    if (isEmailRegistered){
      alert('Email Already Registered!')
    }else if (this.user.password === this.user.confirmPassword) {
      this.userservice.userDB.push(this.user);
      alert('User Registered Successfully!')
      console.log(this.user);
      this.router.navigateByUrl('/login')
    }else {
      alert('Password does not match!')
    }
  }
  getUserDetails(email:string){
    this.user = this.userservice.userDB.find((element:any) => element.email === email)
  }
  cancelUpdate(){
    this.router.navigateByUrl('/usertable')
  }
  update(){
    this.router.navigateByUrl('/usertable')
  }
}