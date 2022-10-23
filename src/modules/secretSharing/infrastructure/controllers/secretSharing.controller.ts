import { Controller, Get, Param } from '@nestjs/common';
import { SecretSharingService } from '../../core/services/secretSharing.service';

@Controller('/secret-sharing')
export class SecretSharingController {
  constructor(private readonly appService: SecretSharingService) {}

  @Get('/sharing/:password')
  getPassword(
    @Param('password') password: any
  ): any {
    return 'ssucces'
  }
}
