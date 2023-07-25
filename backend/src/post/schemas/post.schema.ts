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
    @Prop({ default: Math.round(Math.random() * 9000000000) })
    id: number;

    @Prop({ unique: true, required: true })
    title: string;

    @Prop()
    image: string;

    @Prop({ default: Date.now })
    releaseDate: Date;

    @Prop()
    view: number;

    @Prop()
    status: Status;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name})
    user: User;
}

export const PostSchema = SchemaFactory.createForClass(Post);