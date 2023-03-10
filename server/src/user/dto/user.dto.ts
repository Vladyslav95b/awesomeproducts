import { RoleEnumType } from '../entities/user.entity';
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsEnum(RoleEnumType)
  role: RoleEnumType;

  @IsString()
  photo: string;

  @IsBoolean()
  verified: boolean;
}
