import { Controller, Get, Put, Body, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class UserController {
    constructor(private userService: UserService){}

    @Get()
    async getUsers(@Body() req: any): Promise<any> {
        return this.userService.getUsers(req)
    }

    @Put(':userId')
    async updateUserById(@Body() user: any, @Param('userId') id: string): Promise<any> {
        return this.userService.updateUserById(user, id)
    }

}
