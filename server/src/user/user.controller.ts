import { Controller, Get, Param, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '@root/auth/guards/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  findMe(@Req() req) {
    return this.userService.getByUsername(req.user.username);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:username')
  findByName(@Param('username') username: string, @Req() req) {
    console.log(req.user);
    return this.userService.getByUsername(username);
  }
}
