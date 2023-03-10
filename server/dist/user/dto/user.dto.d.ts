import { RoleEnumType } from '../entities/user.entity';
export declare class UserDto {
    username: string;
    password: string;
    email: string;
    role: RoleEnumType;
    photo: string;
    verified: boolean;
}
