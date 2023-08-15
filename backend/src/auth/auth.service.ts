import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from 'src/user/dto/user.dto';
import { User } from 'src/user/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService
    ){}

    async register(user: UserDto): Promise<any> {
        // check duplicate
        const isExistedUser = await this.userModel.findOne({name: user.name})
        if (isExistedUser) {
            // Error: Username has already exists
            throw new UnauthorizedException('Username has already exists');
        }
        // hash password
        const hashPassword = await bcrypt.hash(user.password, 10)
        // add in db
        const newUser = await this.userModel.create({
            name: user.name,
            password: hashPassword
        });
        return {
            data: {newUser}
        }
    }

    async login(user: UserDto): Promise<any> {
        // check existed
        const currentUser = await this.userModel.findOne({name: user.name})
        if (!currentUser) {
            // Error: Username is incorrect
            throw new UnauthorizedException('Invalid username or password');
        }

        // check password
        const isPasswordMatched = await bcrypt.compare(user.password, currentUser.password)
        if (!isPasswordMatched) {
            // Error: Password is incorrect
            throw new UnauthorizedException('Invalid username or password');
        }

        // create access token by user id
        const token = await this.jwtService.signAsync({ id: currentUser._id })
        return {
            data: { token, role: currentUser.role }
        } 
    }
}
