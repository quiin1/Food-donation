import { Model } from "mongoose";
import { Strategy } from "passport-jwt";
import { User } from "../../user/schemas/user.schema";
declare const AccessTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class AccessTokenStrategy extends AccessTokenStrategy_base {
    private userModel;
    constructor(userModel: Model<User>);
    validate(payload: any): Promise<any>;
}
export {};
