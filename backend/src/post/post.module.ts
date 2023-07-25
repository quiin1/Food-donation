import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from './schemas/post.schema';
import { AuthModule } from 'src/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
// import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    AuthModule,
    PassportModule,
    // MulterModule.register({
    //   dest: './uploads', // Destination folder for uploaded files
    // }),
  ],
  controllers: [PostController],
  providers: [
    PostService,
    // JwtService,
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
  ]
})
export class PostModule { }
