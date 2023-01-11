import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order, OrderDocument } from './schema/order.schema';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name)
    private orderModule: Model<OrderDocument>,
  ) {}

  create(createOrderDto: CreateOrderDto) {
    return this.orderModule.create(createOrderDto);
  }

  findAll() {
    return this.orderModule.find({});
  }

  findOne(id: string) {
    return this.orderModule.findById(id);
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.orderModule.findByIdAndUpdate(id, updateOrderDto);
  }

  remove(id: string) {
    return this.orderModule.findByIdAndRemove(id);
  }
}
