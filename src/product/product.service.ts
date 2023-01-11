import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schema/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private productModule: Model<ProductDocument>,
  ) {}

  create(createProductDto: CreateProductDto) {
    return this.productModule.create(createProductDto);
  }

  getCombos() {
    return this.productModule.find({ category: 'Combos' });
  }

  getFeatured() {
    return this.productModule.find({}).limit(8);
  }

  findAll() {
    return this.productModule.find({});
  }

  findOne(id: string) {
    return this.productModule.findById(id);
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productModule.findByIdAndUpdate(id, updateProductDto);
  }

  remove(id: string) {
    return this.productModule.findByIdAndRemove(id);
  }
}
