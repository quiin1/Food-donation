import { AuthService } from './auth.service';
import { UserDto } from 'src/user/dto/user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    createUser(user: UserDto): Promise<UserDto>;
    login(user: UserDto): Promise<any>;
}
