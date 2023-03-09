"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_service_1 = require("../auth/auth.service");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
let UserService = class UserService {
    constructor(userEntity, authService) {
        this.userEntity = userEntity;
        this.authService = authService;
        this.logger = new common_1.Logger('UserService');
    }
    findUserByEmail(email) {
        return this.userEntity.findOne({ where: { email } });
    }
    validatePassword(password, storedPasswordString) {
        return this.authService.comparePasswords(password, storedPasswordString);
    }
    async mailExists(email) {
        const user = await this.userEntity.findOne({ where: { email } });
        if (user) {
            return true;
        }
        return false;
    }
    async getByUsername(username) {
        const user = await this.userEntity.findOne({ where: { username } });
        if (user) {
            return user;
        }
        throw new common_1.HttpException('User with this username does not exist', common_1.HttpStatus.NOT_FOUND);
    }
    findAll() {
        return this.userEntity.find();
    }
    async createUser(createUserDto) {
        const existEmail = await this.mailExists(createUserDto.email);
        if (existEmail) {
            throw new common_1.HttpException('Email already exist', common_1.HttpStatus.CONFLICT);
        }
        const existUsername = await this.userEntity.findOne({
            where: { username: createUserDto.username },
        });
        if (existUsername) {
            throw new common_1.HttpException('Username already exist', common_1.HttpStatus.CONFLICT);
        }
        const user = new user_entity_1.User();
        Object.assign(user, createUserDto);
        user.password = await this.authService.hashPassword(createUserDto.password);
        await this.userEntity.save(user);
        const response = await this.findUserByEmail(user.email);
        response.password = createUserDto.password;
        return response;
    }
    async login(loginUserDto) {
        const user = await this.findUserByEmail(loginUserDto.email);
        if (!user) {
            throw new common_1.HttpException('Wrong credential', common_1.HttpStatus.UNAUTHORIZED);
        }
        const passwordsMatches = await this.validatePassword(loginUserDto.password, user.password);
        if (passwordsMatches) {
            return await this.authService.generateJwt(user);
        }
        else {
            throw new common_1.HttpException('Wrong password', common_1.HttpStatus.UNAUTHORIZED);
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        auth_service_1.AuthService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map