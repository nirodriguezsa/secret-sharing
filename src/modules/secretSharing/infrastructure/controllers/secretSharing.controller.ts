import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { dataToSharing } from '../../core/dto/dataToSharing.dto';
import { SecretSharingService } from '../../core/services/secretSharing.service';

@Controller('/secret-sharing')
export class SecretSharingController {
  constructor(private readonly secretSharingService: SecretSharingService) {}

  @Get('/generate-passwords/:quantity')
  async getPassword(
    @Param('quantity') quantity: number,
    @Query('length') length: number,
  ): Promise<string[]> {
    return this.secretSharingService.generatePasswords(quantity,length);
  }
}
