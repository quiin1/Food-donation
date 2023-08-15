import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop({ required: [true, 'Username must be required'], unique: true })
  name: string;

  @Prop({ required: [true, 'Password must be required']})
  password: string;

  @Prop({ default: "post-manager"})
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);