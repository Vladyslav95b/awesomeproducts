import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<import("./entities/user.entity").User[]>;
    findMe(req: any): Promise<import("./entities/user.entity").User>;
    findByName(username: string): Promise<import("./entities/user.entity").User>;
}
