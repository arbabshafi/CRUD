import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../Service/userservice.service';
import { json } from 'express';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: any = { firstName: '', lastName: '', email: '', address: '', password: '', confirmPassword: '', };
  id: string | null
  constructor(private router: Router, private userservice: UserserviceService, private activatedroute: ActivatedRoute) { }
  ngOnInit() {
    this.id = this.activatedroute.snapshot.queryParamMap.get('ID')
    this.userservice.getUserByEmail(this.id).subscribe((res: any) => {
      this.user = res;
    })
  }
  userReg() {
    this.userservice.addUser(this.user).subscribe((res: any) => {
      if (res.status == 201) {
        alert(res.msg)
        this.router.navigateByUrl('/login')
      }
      else if (res.status == 409)
        alert(res.msg)
      else {
        alert(res.msg)
      }
    })
  }
  cancelUpdate() {
  this.router.navigateByUrl('/usertable')
  }
  update() {
    this.userservice.updateUser(this.user,this.user.email).subscribe((res: any) => {
      if (res.status === 200) {
        alert('User has been updated');
        this.router.navigateByUrl('/usertable');
      } else if (res.status === 404) {
        alert('User not found');
      }      
    });
  }
}