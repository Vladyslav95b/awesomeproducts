import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { User } from '../user/entities/user.entity';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, JwtService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  const mockUser = {
    username: 'guest',
    password: '123',
    email: 'some@gmail.com',
  } as User;

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should generate JWT', () => {
    expect(service.generateJwt(mockUser)).toBeTruthy();
  });

  it('should hash password', () => {
    jest.spyOn(bcrypt, 'hash').mockImplementation((str) => {
      return '12' + str;
    });
    expect(service.hashPassword('12341')).toBe('1212341');
  });

  it('should compare password', () => {
    jest.spyOn(bcrypt, 'compare').mockImplementation((pw, hashPw) => {
      if (hashPw === '12' + pw) {
        return true;
      }
      return false;
    });
    expect(service.comparePasswords('1212', '121212')).toBeTruthy();
  });
});
