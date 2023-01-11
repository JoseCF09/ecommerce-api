import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/user/schema/user.schema';
import { SignInAuthDto } from './dto/signIn.dto';
import { SignUpAuthDto } from './dto/signUp.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModule: Model<UserDocument>,
  ) {}

  async signIn(signInAuthDto: SignInAuthDto) {
    const { email, password } = signInAuthDto;
    const userFind = await this.userModule.findOne({ email });

    if (!userFind) return { msg: 'Usuario no encontrado' };

    const check = password == userFind.password;

    if (!check) return { msg: 'Ingreso una contraseña incorrecta' };

    const data = userFind.toObject();
    delete data.password;

    return { ...data };
  }

  async signUp(signUpAuthDto: SignUpAuthDto) {
    const { email } = signUpAuthDto;
    const userFind = await this.userModule.findOne({ email });

    if (userFind) return { msg: 'Ingrese un correo diferente' };

    const data = await this.userModule.create(signUpAuthDto);

    return data;
  }
}
