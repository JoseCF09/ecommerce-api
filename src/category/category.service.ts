import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category, CategoryDocument } from './schema/category.schema';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private categoryModule: Model<CategoryDocument>,
  ) {}

  create(createCategoryDto: CreateCategoryDto) {
    return this.categoryModule.create(createCategoryDto);
  }

  findAll() {
    return this.categoryModule.find({});
  }

  findOne(id: string) {
    return this.categoryModule.findById(id);
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryModule.findByIdAndUpdate(id, updateCategoryDto);
  }

  remove(id: string) {
    return this.categoryModule.findByIdAndRemove(id);
  }
}
