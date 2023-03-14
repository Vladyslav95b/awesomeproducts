import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AuthService } from '../auth/auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { RoleEnumType, User } from './entities/user.entity';
import { UserService } from './user.service';

describe('AuthService', () => {
  const usersDB = [
    {
      id: 1,
      username: 'user',
      password: 'asd',
      email: 'mail',
      role: RoleEnumType.USER,
      photo: 'img',
    },
    {
      id: 1,
      username: 'admin',
      password: 'asd',
      email: 'mail2',
      role: RoleEnumType.ADMIN,
      photo: 'img',
    },
  ];
  let service: UserService;
  let userEntity: Repository<User>;
  let authService: AuthService;

  const USER_ENTITY_TOKEN = getRepositoryToken(User);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: USER_ENTITY_TOKEN,
          useValue: {
            findOne: jest.fn(),
            save: jest.fn(),
          },
        },
        {
          provide: AuthService,
          useValue: {
            hashPassword: jest.fn(),
            generateJwt: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    userEntity = module.get<Repository<User>>(USER_ENTITY_TOKEN);
    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('userEntity should be defined', () => {
    expect(userEntity).toBeDefined();
  });

  it('login', async () => {
    const user: LoginUserDto = {
      email: 'vlad',
      password: '11111',
    };
    jest.spyOn(service, 'findUserByEmail').mockResolvedValue({} as User);
    jest.spyOn(service, 'validatePassword').mockReturnValue(true);
    jest.spyOn(authService, 'generateJwt').mockResolvedValue('jwt');

    const result = await service.login(user);
    expect(service.findUserByEmail).toBeCalled();
    expect(service.validatePassword).toBeCalled();
    expect(result).toBe('jwt');
  });

  it('signup', async () => {
    const user: CreateUserDto = {
      email: 'email@gmail.com',
      username: 'vlad',
      password: '11111',
    };
    jest.spyOn(service, 'mailExists').mockResolvedValue(null);
    jest.spyOn(userEntity, 'findOne').mockResolvedValue(null);
    jest.spyOn(authService, 'generateJwt').mockResolvedValue('jwt');
    jest.spyOn(service, 'findUserByEmail').mockResolvedValue(user as User);

    const result = await service.createUser(user);

    expect(service.mailExists).toBeDefined();
    expect(result).toBe(user);
  });
});
