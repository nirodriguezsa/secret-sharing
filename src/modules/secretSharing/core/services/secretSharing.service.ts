import { Injectable } from '@nestjs/common';

@Injectable()
export class SecretSharingService {
  showPassword(password): any {
    return password;
  }
}
