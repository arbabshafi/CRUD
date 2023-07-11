import { Controller, Get, Post, Delete, Put, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.schema';

@Controller('userauthentication')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('/login/:email')
  async getUser(@Body() user: any) {
    const dbUser = await this.appService.getUserByEmail(user.email);
    if (dbUser && dbUser.password === user.password) {
      return { status: 200, msg: 'Login Success' };
    } else {
      return { status: 401, msg: 'Invalid Credentials' };
    }
  }
  @Post('/register')
  async addUser(@Body() user: User) {
    const isUserRegistered = await this.appService.getUserByEmail(user.email);
    if (isUserRegistered) {
      return { status: 409, msg: 'User already registered' };
    } else if (user.password === user.confirmPassword) {
      await this.appService.addUser(user);
      return { status: 201, msg: 'User added successfully' };
    } else {
      return { status: 403, msg: 'Incorrect confirm Password' };
    }
  }
  @Put('/update/:email')
  async updateUser(@Param('email') email: string, @Body() user: User) {
    await this.appService.updateUser(email, user);
    return { status: 200, msg: 'User has been updated successfully!' };
  }
  @Delete('/delete/:email')
  async deleteUser(@Param('email') email: string) {
    await this.appService.deleteUser(email);
    return { status: 202, msg: ' has been deleted!' };
  }
  @Get('/users')
  async getAllUsers() {
    const users = await this.appService.getAllUsers();
    return users;
  }

  @Get('/getuser/:email')
  async getUserByEmail(@Param('email') email: string) {
    const user = await this.appService.getUserByEmail(email);
    if (user) {
      return user;
    } else {
      return { status: 404, msg: 'User not found!' };
    }
  }
}
