import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt"
import { User } from "../../user/schemas/user.schema";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_ACCESS_SECRET,
        })
    }

    async validate(payload: any) {
        const { id } = payload;
        const user = await this.userModel.findById(id)
        if (!user) {
            // Error token not expired but wrong userId
            throw new UnauthorizedException('Login first to access this endpoint.')
        }
        // console.log("payload", payload)
        return payload
    }
}