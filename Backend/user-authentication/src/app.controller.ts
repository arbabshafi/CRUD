import { Controller, Get, Post, Delete, Put, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { user } from './app.model';
@Controller('userauthentication')
export class AppController {
  constructor(private readonly appService: AppService) { }
  @Post('/login/:email')
  getUser(@Body() user: any) {
    const Login = this.appService.userDB.some((u) => u.email === user.email && u.password == user.password);
    if (Login) {
      return { status: 200, msg: "Login Success" }
    }
    else {
      return { status: 401, msg: "Invalid Credentials" }
    }
  }
  @Post('/register')
  addUser(@Body() user: user) {
    const isUserRegistered = this.appService.userDB.some((u: any) => u.email == user.email)
    if (isUserRegistered) {
      return { status: 409, msg: "User already registered" }
    }
    else if (user.password === user.confirmPassword) {
      this.appService.userDB.push(user);
      return { status: 201, msg: "User added successfully" }
    }
    else {
      return { status: 403, msg: "Incorrect confirm Password" }
    }
  }
  @Put('/update/:email')
  updateUser(@Param('email') email: string, @Body() user: any): { status: number; msg: string } {
     const index=this.appService.userDB.findIndex((currentuser)=>{
      return currentuser.email==email
     })
    this.appService.userDB.splice(index,1,user)
    return {status:200, msg:"Testing"}
  }
  @Delete('/delete/:email')
  deleteUser(@Param('email') email: string) {
    const index = this.appService.userDB.findIndex(user => user.email === email);
    if (index !== -1) {
      this.appService.userDB.splice(index, 1);
      return { status: 202, msg: 'User has been deleted!' };
    } else {
      return { status: 404, msg: 'User not found!' };
    }
  }
  @Get('/users')
  getAllUsers() {
    return this.appService.userDB;
  }
  @Get('/getuser/:email')
  getUserByEmail(@Param('email') email: string) {
    const user = this.appService.userDB.find((currentUser) => {
      return currentUser.email === email;
    });
    if (user) {
      return user;
    } else {
      return { status: 404, msg: 'User not found!' };
    }
  }
}