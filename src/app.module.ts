import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { BrandModule } from './brand/brand.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    CategoryModule,
    UserModule,
    AuthModule,
    BrandModule,
    OrderModule,
    ProductModule,
    MongooseModule.forRoot('mongodb://localhost:27017/tecnodum'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
