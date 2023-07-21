import { Model } from 'mongoose';
import { UserDto } from 'src/auth/dto/user.dto';
import { User } from 'src/auth/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    register(user: UserDto): Promise<any>;
    login(user: UserDto): Promise<any>;
}
