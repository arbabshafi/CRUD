import { Component,OnInit } from '@angular/core';
import { UserserviceService } from '../Service/userservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  user: any;
  selectedUser: any = null;
  constructor(public userService: UserserviceService, private router: Router, private activatedroute: ActivatedRoute) { }
  ngOnInit() {
    this.userService.getAllUsers(this.user).subscribe(
      (data) => {
        this.user = data;
      }
    );
  }  
  deleteUser(email: any) {
    const confirmation = window.confirm('Are you sure you want to delete this user?');
    if (confirmation) {
      this.userService.deleteUser(email).subscribe((res: any) => {
        if (res.status == 202) {
          alert(res.msg);
          this.ngOnInit();
        } else {
          alert(res.msg);
        }
      });
    }
  }
  editUser(email: string) {
    this.router.navigate(['/update'], { queryParams: { 'ID': email } })
  }
  logout() {
    this.router.navigate(['/login']);
  }
  viewUser(user: any) {
    this.selectedUser = user;
  }
  home() {
    this.router.navigateByUrl('/login')
  }
}