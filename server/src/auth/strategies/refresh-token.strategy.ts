import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt"
import { User } from "../schemas/user.schema";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Request } from 'express'

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_REFRESH_SECRET,
            passReqToCallback: true,
        })
    }

    async validate(req: Request, payload: any) {
        const { id } = payload;
        const user = await this.userModel.findById(id)
        if (!user) {
            // Error token not expired but wrong userId
            throw new UnauthorizedException('Login first to access this endpoint.')
        }
        console.log("payload refresh", payload)
        return payload
    }
}