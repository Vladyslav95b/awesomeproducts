import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { CreateUserDto } from './dto/create-user.dto';
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

  const USER_ENTITY_TOKEN = getRepositoryToken(User);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: USER_ENTITY_TOKEN,
          useValue: {},
        },
        {
          provide: AuthService,
          useValue: {
            hashPassword: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    userEntity = module.get<Repository<User>>(USER_ENTITY_TOKEN);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('userEntity should be defined', () => {
    expect(userEntity).toBeDefined();
  });

  it('login', async () => {
    const newUser: CreateUserDto = {
      email: 'email@gmail.com',
      username: 'vlad',
      password: '11111',
    };
    expect(service.createUser(newUser));
  });
});
