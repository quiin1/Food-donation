import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "src/user/schemas/user.schema";

export enum Status {
    ONLINE = 'Online',
}

@Schema({
    timestamps: true
})
export class Post {
    @Prop({ unique: true, required: true })
    title: string;

    @Prop()
    image: string;

    @Prop()
    realeaseDate: Date;

    @Prop()
    view: number;

    @Prop()
    status: Status;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name})
    user: User;
}

export const PostSchema = SchemaFactory.createForClass(Post);