import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from '../auth/auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  // TODO move to constructor
  private logger = new Logger('UserService');
  constructor(
    @InjectRepository(User)
    private userEntity: Repository<User>,
    private authService: AuthService,
  ) {}

  async findUserByEmail(email: string) {
    return this.userEntity.findOne({ where: { email } });
  }

  validatePassword(password: string, storedPasswordString: string): boolean {
    return this.authService.comparePasswords(password, storedPasswordString);
  }

  async mailExists(email: string): Promise<boolean> {
    const user = await this.userEntity.findOne({ where: { email } });
    if (user) {
      return true;
    }
    return false;
  }

  async getByUsername(username: string): Promise<User> {
    const user = await this.userEntity.findOne({ where: { username } });
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this username does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  findAll(): Promise<User[]> {
    return this.userEntity.find();
  }

  async createUser(createUserDto: CreateUserDto) {
    const existEmail = await this.mailExists(createUserDto.email);
    if (existEmail) {
      throw new HttpException('Email already exist', HttpStatus.CONFLICT);
    }
    const existUsername = await this.userEntity.findOne({
      where: { username: createUserDto.username },
    });
    if (existUsername) {
      throw new HttpException('Username already exist', HttpStatus.CONFLICT);
    }
    const user = new User();
    Object.assign(user, createUserDto);
    user.password = await this.authService.hashPassword(createUserDto.password);
    await this.userEntity.save(user);
    const response = await this.findUserByEmail(user.email);
    response.password = createUserDto.password;

    return response;
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.findUserByEmail(loginUserDto.email);

    if (!user) {
      throw new HttpException('Wrong credential', HttpStatus.UNAUTHORIZED);
    }

    const passwordsMatches = await this.validatePassword(
      loginUserDto.password,
      user.password,
    );
    if (passwordsMatches) {
      return await this.authService.generateJwt(user);
    } else {
      throw new HttpException('Wrong password', HttpStatus.UNAUTHORIZED);
    }
  }
}
