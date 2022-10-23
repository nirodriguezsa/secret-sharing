import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { welcome } from './welcome';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
  logger.log(`Running in port ${process.env.PORT} my friend!`)
  welcome()
}
bootstrap();
