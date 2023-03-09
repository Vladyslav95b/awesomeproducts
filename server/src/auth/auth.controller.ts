import {
  Body,
  Controller,
  Get,
  HttpCode,
  Logger,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '@root/auth/guards/jwt-auth.guard';
import { CreateUserDto } from '@root/user/dto/create-user.dto';
import { LoginUserDto } from '@root/user/dto/login-user.dto';
import { UserService } from '@root/user/user.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  private logger = new Logger('UserController');
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Put('signup')
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.userService.createUser(createUserDto);
  }

  @Post('signin')
  @HttpCode(200)
  login(@Body() loginUserDto: LoginUserDto) {
    return this.userService.login(loginUserDto);
  }

  //TODO feature with blacklist of tokens
  //   @Get('signout')
  //   @HttpCode(200)
  //   @UseGuards(JwtAuthGuard)
  //   logout(@Req() req) {
  //     return;
  //   }
}
