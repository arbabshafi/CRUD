import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  address: string;

  @Prop()
  password: string;

  @Prop()
  confirmPassword: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  password: string;
  confirmPassword: string;
}

export interface UserDocument extends User, Document {}

