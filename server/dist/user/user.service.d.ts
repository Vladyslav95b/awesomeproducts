import { AuthService } from '@root/auth/auth.service';
import { CreateUserDto } from '@root/user/dto/create-user.dto';
import { LoginUserDto } from '@root/user/dto/login-user.dto';
import { User } from '@root/user/entities/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private userEntity;
    private authService;
    private logger;
    constructor(userEntity: Repository<User>, authService: AuthService);
    private findUserByEmail;
    private validatePassword;
    private mailExists;
    getByUsername(username: string): Promise<User>;
    findAll(): Promise<User[]>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    login(loginUserDto: LoginUserDto): Promise<string>;
}
