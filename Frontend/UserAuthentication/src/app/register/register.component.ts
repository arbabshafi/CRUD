import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../Service/userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: any = {firstName: '',lastName: '',email: '',address: '',password: '',confirmPassword: ''};
  id: string | null;
  constructor(private router: Router,private userservice: UserserviceService,private activatedroute: ActivatedRoute) {}
  ngOnInit() {
    this.id = this.activatedroute.snapshot.queryParamMap.get('ID');
    this.userservice.getUserByEmail(this.id).subscribe((res: any) =>{
      this.user = res;
    });
  }
  userReg() {
    this.userservice.addUser(this.user).subscribe((res: any) => {
      if (res.status == 201) {
        Swal.fire('Success', res.msg, 'success'); 
        this.router.navigateByUrl('/login');
      } else if (res.status == 409) {
        Swal.fire('Error', res.msg, 'error'); 
      } else {
        Swal.fire('Error', res.msg, 'error'); 
      }
    });
  }
  cancelUpdate() {
    this.router.navigateByUrl('/usertable');
  }
  update() {
    this.userservice.updateUser(this.user, this.user.email).subscribe((res: any) => {
      if (res.status === 200) {
        Swal.fire('Success',res.msg,'success')
        this.router.navigateByUrl('/usertable');
      } else if (res.status === 404) {
        Swal.fire('Error', 'User not found', 'error'); 
      }
    });
  }
}