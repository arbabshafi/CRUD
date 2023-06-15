import { Component } from '@angular/core';
import { UserserviceService } from '../Service/userservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent{
  user:any;
  selectedUser: any = null;
  constructor(public userService:UserserviceService,private router:Router,private activatedroute:ActivatedRoute){}
  deleteUser(item:any) {
    const index = this.userService.userDB.indexOf(item);
    if (index !== -1) {
      const confirmation = confirm('Are you sure you want to delete this user?');
      if (confirmation) {
        this.userService.userDB.splice(index, 1);
      }
    }    
  }
  editUser(email:string) {
  this.router.navigate(['/update'],{queryParams:{'ID':email}})
  }
  logout() {
    this.router.navigate(['/login']);
  }
  viewUser(user: any) {
  this.selectedUser = user;
  }
  home(){
  this.router.navigateByUrl('/login')
  }
}