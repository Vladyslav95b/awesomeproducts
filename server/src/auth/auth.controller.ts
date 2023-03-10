import { Body, Controller, HttpCode, Logger, Post, Put } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LoginUserDto } from '../user/dto/login-user.dto';
import { UserService } from '../user/user.service';
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
