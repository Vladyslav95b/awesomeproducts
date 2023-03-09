import { JwtService } from '@nestjs/jwt';
import { UserDto } from '@root/user/dto/user.dto';
export declare class AuthService {
    private readonly jwtService;
    private logger;
    constructor(jwtService: JwtService);
    generateJwt(user: UserDto): Promise<string>;
    hashPassword(password: string): any;
    comparePasswords(password: string, storedPasswordHash: string): any;
}
