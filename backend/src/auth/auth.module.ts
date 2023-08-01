import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User, UserSchema } from '../user/schemas/user.schema';
import { AccessTokenStrategy } from './strategies/access-token.strategy';

@Module({
  imports: [
    // db
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    // jwt
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule], // env
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_ACCESS_SECRET'),
        signOptions: {
          expiresIn: config.get<string | number>('JWT_ACCESS_EXPIRE')
        }
      })
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AccessTokenStrategy,
  ],
  exports: [
    PassportModule,
    AccessTokenStrategy,
  ]
})
export class AuthModule {}