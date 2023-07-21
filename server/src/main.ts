import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  app.useGlobalPipes(new ValidationPipe());
  
  const PORT = parseInt(process.env.PORT, 10) || 5000
  await app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
  });
}
bootstrap();

// AppModule <- UserModule <- UserController <- UserService <- UserRepository