import mongoose from "mongoose";
import { User } from "src/user/schemas/user.schema";
export declare enum Status {
    ONLINE = "Online"
}
export declare class Post {
    title: string;
    image: string;
    realeaseDate: Date;
    view: number;
    status: Status;
    user: User;
}
export declare const PostSchema: mongoose.Schema<Post, mongoose.Model<Post, any, any, any, mongoose.Document<unknown, any, Post> & Post & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Post, mongoose.Document<unknown, {}, Post> & Post & {
    _id: mongoose.Types.ObjectId;
}>;
