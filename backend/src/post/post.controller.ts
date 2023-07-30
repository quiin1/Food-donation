import { Controller, Get, Post, Put, Delete, Body, UseGuards, Req, Param, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('/posts')
@UseGuards(AuthGuard('jwt'))
export class PostController {
    constructor(private postService: PostService) {}

    @Get()
    async getPosts(@Query('page') page: any, @Query('pageSize') pageSize: any): Promise<any> {
        console.log("params: ", page, pageSize)
        return this.postService.getPosts(page, pageSize)
    }

    @Post()
    async createPost(@Body() post: any, @Req() req: any): Promise<any> {
        return this.postService.createPost(post, req.user)
    }

    @Put(':postId')
    async updatePostById(@Body() post: any, @Param('postId') id: string): Promise<any> {
        return this.postService.updatePostById(post, id)
    }

    @Delete(':postId')
    async deletePostById(@Param('postId') id: string): Promise<any> {
        return this.postService.deletePostById(id)
    }
}