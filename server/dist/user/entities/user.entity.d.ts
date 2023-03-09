export declare enum RoleEnumType {
    USER = "user",
    ADMIN = "admin"
}
export declare class User {
    id: number;
    username: string;
    email: string;
    password: string;
    role: RoleEnumType.USER;
    photo: string;
    verified: boolean;
    toJSON(): this;
    emailToLowerCase(): void;
}
