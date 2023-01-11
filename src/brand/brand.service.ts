import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand, BrandDocument } from './schema/brand.schema';

@Injectable()
export class BrandService {
  constructor(
    @InjectModel(Brand.name) private brandModule: Model<BrandDocument>,
  ) {}

  create(createBrandDto: CreateBrandDto) {
    return this.brandModule.create(createBrandDto);
  }

  findAll() {
    return this.brandModule.find({});
  }

  findOne(id: string) {
    return this.brandModule.findById(id);
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    return this.brandModule.findByIdAndUpdate(id, updateBrandDto);
  }

  remove(id: string) {
    return this.brandModule.findByIdAndRemove(id);
  }
}
