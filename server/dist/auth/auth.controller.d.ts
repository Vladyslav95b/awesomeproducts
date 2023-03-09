import { CreateUserDto } from '@root/user/dto/create-user.dto';
import { LoginUserDto } from '@root/user/dto/login-user.dto';
import { UserService } from '@root/user/user.service';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    private userService;
    private logger;
    constructor(authService: AuthService, userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("../user/entities/user.entity").User>;
    login(loginUserDto: LoginUserDto): Promise<string>;
}
