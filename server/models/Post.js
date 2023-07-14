import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    // image: { type: },
    title: { type: String, required: [true, 'Post must have title'] },
    address: { type: String },
    location: { type: String },
    statusPost: { type: Boolean },
    statusReward: { type: Boolean },
    statusPayment: { type: Boolean },
    author: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

const Post = mongoose.model('Post', postSchema);
export default Post