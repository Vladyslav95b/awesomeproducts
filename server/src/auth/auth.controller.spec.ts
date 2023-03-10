import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginUserDto } from '../user/dto/login-user.dto';
import { RoleEnumType, User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let controller: AuthController;
  let service: UserService;

  let userEntity: Repository<User>;

  const USER_ENTITY_TOKEN = getRepositoryToken(User);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        JwtService,
        UserService,
        {
          provide: USER_ENTITY_TOKEN,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Auth', () => {
    const requestLogin = {
      password: 'qwe',
      email: 'sone@mail.com',
    } as LoginUserDto;
    const requestSingUp = {
      username: 'asd',
      password: 'qwe',
      email: 'sone@mail.com',
    };
    const result = {
      id: 1,
      role: RoleEnumType.USER,
      username: 'asd',
      password: 'qwe',
      email: 'sone@mail.com',
      photo: 'img',
    } as User;

    it('signin', async () => {
      jest.spyOn(service, 'login').mockImplementation(async () => await 'jwt');

      expect(await controller.login(requestLogin)).toBe('jwt');
    });
    it('singup', async () => {
      jest
        .spyOn(service, 'createUser')
        .mockImplementation(async () => await result);

      expect(await controller.create(requestSingUp)).toBe(result);
    });
  });
});
