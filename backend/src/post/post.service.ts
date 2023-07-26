import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './schemas/post.schema';
import mongoose, { Model } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

@Injectable()
export class PostService {
    constructor(
        @InjectModel(Post.name)
        private postModel: Model<Post>
    ){}
    
    // getAllPosts(): Post[] {
    async getAllPosts(): Promise<any> {
        // const resPerPage = 2;
        // const currentPage = Number(query.page) || 1;
        // const skip = resPerPage * (currentPage - 1);

        // const keyword = query.keyword
        // ? {
        //     title: {
        //         $regex: query.keyword,
        //         $options: 'i',
        //     },
        //     }
        // : {};

        // const posts = await this.postModel.base
        // .find({ ...keyword })
        // .limit(resPerPage)
        // .skip(skip);
        // return posts;

        const posts = await this.postModel.find({}).populate('user')
        return posts
    }

    // FIX HERE user underfind
    async createPost(post: Post, user: User): Promise<Post> {
        const id = Math.round(Math.random() * 9000000000)
        const data = Object.assign(
            id,
            post
            // , { user: user._id }
            )
        console.log(data)
        const res = await this.postModel.create(data)
        console.log(res)
        return res
    }

    async findPostById(id: string): Promise<Post> {
        const isValidId = mongoose.isValidObjectId(id)
        if (!isValidId) {
            // Error: incorrect id
            // throw new BadRequestException('Please enter correct id')
        }
        const post = await this.postModel.findById(id)
        if (!post) {
            // Error 
        }
        return post
    }

    // FIX HERE
    async updatePostById(post: Post, id: string): Promise<any> {
        return await this.postModel.findByIdAndUpdate(id, post, { 
            new: true,
            runValidators: true,
        })
    }
    
    async deletePostById(id: string): Promise<Post> {
        return await this.postModel.findByIdAndDelete(id)
    }
}
