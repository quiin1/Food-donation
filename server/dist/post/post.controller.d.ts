import { PostService } from './post.service';
export declare class PostController {
    private postService;
    constructor(postService: PostService);
    getAllPosts(): Promise<any>;
    createPost(post: any, req: any): Promise<any>;
    updatePostById(id: string): Promise<any>;
    deletePostById(id: string): Promise<any>;
}
