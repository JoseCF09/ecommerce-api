import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ versionKey: false })
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  cellphone: number;

  @Prop()
  address: string;

  @Prop({ default: 'Cliente' })
  rol: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
