import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from '../user/dto/user.dto';
import * as bcrypt from 'bcrypt';

const saltRounds = 12;
@Injectable()
export class AuthService {
  private logger = new Logger('AuthService');

  constructor(private readonly jwtService: JwtService) {}

  async generateJwt(user: UserDto) {
    return this.jwtService.signAsync({ user });
  }

  hashPassword(password: string) {
    return bcrypt.hash(password, saltRounds);
  }

  comparePasswords(password: string, storedPasswordHash: string) {
    return bcrypt.compare(password, storedPasswordHash);
  }
}
