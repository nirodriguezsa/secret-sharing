import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './infrastructure/controllers/app.controller';
import { AppService } from './core/services/app.service';
import { SecretSharingModule } from './modules/secretSharing/secretSharing.module';

const modules = [SecretSharingModule]
@Module({
  imports: [ConfigModule.forRoot(), ...modules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
