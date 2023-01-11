import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ versionKey: false })
export class Product {
  @Prop()
  image: string;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  priceBase: number;

  @Prop()
  discount: number;

  @Prop()
  price: number;

  @Prop()
  brand: string;

  @Prop()
  category: string;

  @Prop()
  count: number;

  @Prop()
  details: [{ title: string; description: string }];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
