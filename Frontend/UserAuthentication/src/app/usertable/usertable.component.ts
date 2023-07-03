import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../Service/userservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  user: any;
  selectedUser: any = null;
  constructor(public userService: UserserviceService,private router: Router, private activatedroute: ActivatedRoute) {}
  ngOnInit() {
    this.userService.getAllUsers(this.user).subscribe((data) => {
      this.user = data;
    });
  }
  deleteUser(email: any) {
    Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to delete this user?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(email).subscribe((res: any) => {
          if (res.status == 202) {
            Swal.fire('Success', res.msg, 'success');
            this.ngOnInit();
          } else {
            Swal.fire('Error', res.msg, 'error');
          }
        });
      }
    });
  }
  editUser(email: string) {
    this.router.navigate(['/update'], { queryParams: { ID: email } });
  }
  logout() {
    Swal.fire({
      title: 'Logout',
      text: 'Successfully logged out',
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'OK'
    }).then(() => {
      this.router.navigate(['/login']);
    });
  }
  viewUser(user: any) {
    this.selectedUser = user;
  }
  home() {
    this.router.navigateByUrl('/login');
  }
}