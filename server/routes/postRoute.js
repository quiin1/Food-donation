import express from 'express';
import {getAllPosts, createOnePost, updateOnePost, deleteOnePost} from '../controllers/postController.js';
import {verifyToken} from '../middlewares/verifyToken.js'

const router = express.Router();

router.route('/').get(getAllPosts).post(verifyToken, createOnePost)

router.route('/:postId').put(verifyToken, updateOnePost).delete(verifyToken, deleteOnePost)

export default router;