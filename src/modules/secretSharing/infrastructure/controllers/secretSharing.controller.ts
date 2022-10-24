import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { DataToSharing } from '../../core/dto/dataToSharing.dto';
import { SecretSharingService } from '../../core/services/secretSharing.service';

@Controller('/secret-sharing')
export class SecretSharingController {
  constructor(private readonly secretSharingService: SecretSharingService) {}

  @Post('')
  sharingPassword(
    @Body() data : DataToSharing
  ): Array<string[]> {
    return this.secretSharingService.sharingPassword(data);
  }

  @Get('/generate-passwords/:quantity')
  async generatePasswords(
    @Param('quantity') quantity: number,
    @Query('length') length: number,
  ): Promise<string[]> {
    return this.secretSharingService.generatePasswords(quantity,length);
  }
}
