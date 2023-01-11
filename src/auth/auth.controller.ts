import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInAuthDto } from './dto/signIn.dto';
import { SignUpAuthDto } from './dto/signUp.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  create(@Body() signInAuthDto: SignInAuthDto) {
    return this.authService.signIn(signInAuthDto);
  }

  @Post('/signup')
  findAll(@Body() signUpAuthDto: SignUpAuthDto) {
    return this.authService.signUp(signUpAuthDto);
  }
}
