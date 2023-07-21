import { Post } from './schemas/post.schema';
import { Model } from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';
export declare class PostService {
    private postModel;
    constructor(postModel: Model<Post>);
    getAllPosts(): Promise<any>;
    createPost(post: Post, user: User): Promise<Post>;
    findPostById(id: string): Promise<Post>;
    updatePostById(id: string): Promise<any>;
    deletePostById(id: string): Promise<Post>;
}
