import { Controller, Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from 'src/auth/dto/user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('/register')
    async createUser(@Body() user: UserDto): Promise<UserDto> {
        return await this.authService.register(user)
    }

    @Post('/login')
    async login(@Body() user: UserDto) {
        return await this.authService.login(user)
    }
}
