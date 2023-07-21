import { Body, Controller, Get, Req } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Get()
    getUser(@Body() req): any {
        return this.userService.getUser(req)
    }
}
