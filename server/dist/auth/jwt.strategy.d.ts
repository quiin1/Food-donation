import { Model } from "mongoose";
import { Strategy } from "passport-jwt";
import { User } from "./schemas/user.schema";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userModel;
    constructor(userModel: Model<User>);
    validate(payload: any): Promise<any>;
}
export {};
