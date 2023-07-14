import Post from '../models/Post.js'

export const getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find({}).populate('author')
        res.status(200).json({
            status: 'success',
            results: posts.length,
            data: {posts}
        })
    } catch (error) {
        next(error)
    }
}

export const createOnePost = async (req, res, next) => {
    try {
        const {userId} = req.user 
        const post = await Post.create({...req.body, author: userId})
        res.status(200).json({
            status: 'success',
            data: {post}
        })
    } catch (error) {
        next(error)
    }
}

export const updateOnePost = async (req, res, next) => {
    try {
        const {postId} = req.params
        const post = await Post.findByIdAndUpdate(postId, {...req.body}, {new: true, runValidator: true})

        res.status(200).json({
            status: 'success',
            data: {post}
        })
    } catch (error) {
        next(error)
    }
}

export const deleteOnePost = async (req, res, next) => {
    try {
        const {postId} = req.params
        await Post.findByIdAndDelete(postId)

        res.status(200).json({
            status: 'success',
            message: 'Post has been deleted'
        })
    } catch (error) {
        next(error)
    }
}

