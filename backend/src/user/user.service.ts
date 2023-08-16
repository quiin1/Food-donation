import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

interface Data {
}

interface PostData extends Data {
    posts: any,
    page?: number,
    pageLimit?: number,
    totalRows?: number
}

type Response = {
    error?: string,
    data?: Data,
    message?: string
}

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService
    ){}

    async getUsers(req: any): Promise<any> {
        const total = await this.userModel.countDocuments().exec()
        try {
            const users = await this.userModel.find({})
            return {
                data: {
                    users,
                    total
                }
            }
        } catch (error) {
            console.log("error at getUsers service")
        }
    }

    async updateUserById(user: User, id: string): Promise<Response> {
        const updatedUser = await this.userModel.findByIdAndUpdate(id, user, { 
            new: true,
            runValidators: true,
        })
        return {
            data: {updatedUser}
        }
    }
}
