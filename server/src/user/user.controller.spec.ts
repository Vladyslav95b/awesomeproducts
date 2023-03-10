import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { RoleEnumType, User } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;

  let service: UserService;

  let userEntity: Repository<User>;

  const USER_ENTITY_TOKEN = getRepositoryToken(User);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: USER_ENTITY_TOKEN,
          useValue: {},
        },
        AuthService,
        JwtService,
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
    userEntity = module.get<Repository<User>>(USER_ENTITY_TOKEN);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Get user', () => {
    const request = {
      user: {
        id: 1,
        role: RoleEnumType.USER,
        username: 'asd',
        password: 'qwe',
        email: 'sone@mail.com',
        photo: 'img',
      },
    };
    const resultArray = [
      {
        id: 1,
        role: RoleEnumType.USER,
        username: 'asd',
        password: 'qwe',
        email: 'sone@mail.com',
        photo: 'img',
      },
    ] as User[];

    const result = {
      id: 1,
      role: RoleEnumType.USER,
      username: 'asd',
      password: 'qwe',
      email: 'sone@mail.com',
      photo: 'img',
    } as User;

    it('find all', async () => {
      jest
        .spyOn(service, 'findAll')
        .mockImplementation(async () => await resultArray);

      expect(await controller.findAll()).toBe(resultArray);
    });

    it('Get current user info', async () => {
      jest
        .spyOn(service, 'getByUsername')
        .mockImplementation(async () => await result);
      expect(await controller.findMe(request)).toBe(result);
    });
  });
});
