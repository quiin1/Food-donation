import { Model } from "mongoose";
import { Strategy } from "passport-jwt";
import { User } from "../schemas/user.schema";
import { Request } from 'express';
declare const RefreshTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class RefreshTokenStrategy extends RefreshTokenStrategy_base {
    private userModel;
    constructor(userModel: Model<User>);
    validate(req: Request, payload: any): Promise<any>;
}
export {};
