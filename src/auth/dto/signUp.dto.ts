import { PartialType } from '@nestjs/mapped-types';
import { SignInAuthDto } from './signIn.dto';

export class SignUpAuthDto extends PartialType(SignInAuthDto) {
  firstName: string;

  lastName: string;

  cellphone: number;

  address: string;

  rol: string;
}
