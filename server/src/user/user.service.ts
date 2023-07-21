import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService
    ){}

    getUser(request: any): any {
        console.log(request)
        return request
        // Lấy Access Token từ header hoặc query params (tùy thuộc cách bạn gửi token lên backend)
        const token = request.headers.authorization || request.data.token;

        // Khóa bí mật (secret key) dùng để giải mã, nó cần giống như khóa bí mật bạn sử dụng để ký Access Token
        const secretKey = 'your_secret_key';

        try {
            // Giải mã Access Token
            const decodedToken = this.jwtService.verify(token);

            // Sau khi giải mã thành công, decodedToken sẽ chứa thông tin trong Access Token
            // Ví dụ: decodedToken.userId, decodedToken.username, ...

            return decodedToken; // Trả về thông tin đã giải mã
        } catch (error) {
            // Xử lý lỗi nếu có
            console.error('Invalid token:', error.message);
            return { error: 'Invalid token' };
        }
    }
}
