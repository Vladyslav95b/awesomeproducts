import { AuthService } from '../auth/auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './entities/user.entity';
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
