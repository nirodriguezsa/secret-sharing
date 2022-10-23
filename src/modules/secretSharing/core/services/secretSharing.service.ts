import { Injectable } from "@nestjs/common";
import { dataToSharing } from "../dto/dataToSharing.dto";
import {generateMultiple} from 'generate-password'

@Injectable()
export class SecretSharingService {
  showPassword(data: dataToSharing): any {
    return data.password;
  }

  async generatePasswords(
    quantity: number,
    length: number
  ) : Promise<string[]> {
    return generateMultiple(quantity,{
      length,
      numbers: true,
      symbols: true,
    });
  }
}
