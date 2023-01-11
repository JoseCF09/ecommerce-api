import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Product } from 'src/product/schema/product.schema';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
  product: Product;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
