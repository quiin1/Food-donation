import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Req } from '@nestjs/common';
import { PostService } from './post.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('/posts')
@UseGuards(AuthGuard('jwt'))
export class PostController {
    constructor(private postService: PostService) {}
    
    @Get()
    async getAllPosts(): Promise<any> {
        return this.postService.getAllPosts()
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