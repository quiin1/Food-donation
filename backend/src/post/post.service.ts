import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './schemas/post.schema';
import mongoose, { Model } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

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
export class PostService {
    constructor(
        @InjectModel(Post.name)
        private postModel: Model<Post>
    ){}
    
    async getPosts(page: any, pageLimit: any): Promise<Response> {
        // const page = params.page
        // const pageLimit = params.pageLimit
        const count = await this.postModel.countDocuments().exec()
        if (!page && !pageLimit) {
            const posts = await this.postModel.find({}).populate('user')
            return {
                data: {
                    posts,
                    count
                }
            }
        }
        if (page > 0) {
            const skip = (page - 1) * pageLimit;
            const posts = await this.postModel.find({}).populate('user').limit(pageLimit).skip(skip).exec()
            return {
                data: {
                    posts,
                    count
                }
            }
        }
        else {
            // Error: Invalid page (value <=0)
            console.log("error at getPosts service")
        }
    }

    // FIX HERE user underfind
    async createPost(post: Post, user: User): Promise<Response> {
        const id = Math.round(Math.random() * 9000000000)
        const data = Object.assign(
            id,
            post
            // , { user: user._id }
        )
        const newPost = await this.postModel.create(data)
        return {
            data: {newPost}
        }
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

    async updatePostById(post: Post, id: string): Promise<Response> {
        const updatedPost = await this.postModel.findByIdAndUpdate(id, post, { 
            new: true,
            runValidators: true,
        })
        return {
            data: {updatedPost}
        }
    }
    
    async deletePostById(id: string): Promise<Response> {
        console.log("id", id)
        const deletedPost = await this.postModel.findByIdAndDelete(id)
        return {
            data: {deletedPost}
        }
    }
}
