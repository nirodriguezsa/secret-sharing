import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { welcome } from './welcome';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  logger.log(`Running in port ${process.env.PORT}`)
  welcome()
}
bootstrap();
