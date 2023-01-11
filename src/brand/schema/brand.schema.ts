import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Product } from 'src/product/schema/product.schema';

export type BrandDocument = Brand & Document;

@Schema({ versionKey: false })
export class Brand {
  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
  product: Product;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);
