"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const post_schema_1 = require("./schemas/post.schema");
const mongoose_2 = require("mongoose");
let PostService = exports.PostService = class PostService {
    constructor(postModel) {
        this.postModel = postModel;
    }
    async getAllPosts() {
        const posts = await this.postModel.find({}).populate('user');
        return posts;
    }
    async createPost(post, user) {
        const data = Object.assign(post);
        console.log(data);
        const res = await this.postModel.create(data);
        console.log(res);
        return res;
    }
    async findPostById(id) {
        const isValidId = mongoose_2.default.isValidObjectId(id);
        if (!isValidId) {
        }
        const post = await this.postModel.findById(id);
        if (!post) {
        }
        return post;
    }
    async updatePostById(id) {
        return await this.postModel.findByIdAndUpdate(id, this.findPostById(id), {
            new: true,
            runValidators: true,
        });
    }
    async deletePostById(id) {
        return await this.postModel.findByIdAndDelete(id);
    }
};
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(post_schema_1.Post.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PostService);
//# sourceMappingURL=post.service.js.map