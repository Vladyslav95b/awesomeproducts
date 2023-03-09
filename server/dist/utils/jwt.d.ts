import { SignOptions } from 'jsonwebtoken';
export declare const signJwt: (payload: any, keyName: 'accessTokenPrivateKey' | 'refreshTokenPrivateKey', options: SignOptions) => string;
export declare const verifyJwt: <T>(token: string, keyName: 'accessTokenPublicKey' | 'refreshTokenPublicKey') => T;
