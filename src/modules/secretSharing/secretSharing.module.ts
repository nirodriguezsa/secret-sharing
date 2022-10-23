import { Module } from '@nestjs/common';
import { SecretSharingService } from './core/services/secretSharing.service';
import { SecretSharingController } from './infrastructure/controllers/secretSharing.controller';

const services = [SecretSharingService];

@Module({
  imports: [],
  controllers: [SecretSharingController],
  providers: [...services],
  exports: [],
})
export class SecretSharingModule {}
