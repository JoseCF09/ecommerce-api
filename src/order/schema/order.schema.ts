import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/user/schema/user.schema';

export type OrderDocument = HydratedDocument<Order>;

@Schema({ versionKey: false })
export class Order {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop()
  products: [
    {
      name: string;
      description: string;
      priceBase: number;
      discount: number;
      price: number;
      category: string;
      details: [{ title: string; description: string }];
      total: number;
      count: number;
    },
  ];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
