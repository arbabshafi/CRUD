import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async addUser(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async updateUser(email: string, user: User): Promise<User> {
    return this.userModel.findOneAndUpdate({ email }, user, { new: true });
  }

  async deleteUser(email: string): Promise<User> {
    return this.userModel.findOneAndRemove({ email });
  }

  async getUserByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email });
  }

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find();
  }
}
