import { ConflictException, Injectable } from "@nestjs/common";
import { DataToSharing } from "../dto/dataToSharing.dto";
import {generateMultiple} from 'generate-password'
import Constants from "../utils/Constants";

@Injectable()
export class SecretSharingService {
  showPassword(data: DataToSharing): any {
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

  sharingPassword(data: DataToSharing): Array<string[]> {
    this.validateSharingErrors(data);
    const coeficients = this.getPolynomialCoeficients(data.password, data.needs);
    const points = this.getPoints(data.parts, coeficients);
    return points;
  }

  private getPolynomialCoeficients(password: string, needs: number): Array<bigint>{
    let passwordString : string = '';
    const coeficients : Array<bigint> = [];

    for (let k = 0; k <= needs; k++) {
      coeficients.push(BigInt(Math.floor(Math.random()* (Constants.MAX_RANDOM_NUM - Constants.MIN_RANDOM_NUM) + Constants.MIN_RANDOM_NUM)));
    }

    password.split('').forEach(letter => {
      let code = letter.charCodeAt(0);
      let codeStr = '';
      if(code < 100) codeStr = '0' + code;
      else codeStr = String(code);

      passwordString += codeStr;
    });
    coeficients[0] = BigInt(passwordString);
    return coeficients;
  }

  private getPoints(numberOfPoints: number, coeficients: bigint[]): Array<string[]> {
    let xValues = [...Array(numberOfPoints + 1).keys()];
    xValues.shift();

    return xValues.map( x => {
      let res = BigInt(0);
      for (let exp = 1; exp < coeficients.length; exp++) {
        res += coeficients[exp] * (BigInt(x) ** BigInt(exp))
      }
      res += (coeficients[0]);
      return [String(x), String(res)];
    })
  }

  private validateSharingErrors(data: DataToSharing) : void{
    if (data.parts === 0 || data.needs === 0) {
      throw new ConflictException('Parts must be greater than 0');
    }
    if (data.parts < data.needs) {
      throw new ConflictException('The parts to be divided cannot be smaller than the parts necessary to reconstruct the message');
    }
    if (data.password.length === 0) {
      throw new ConflictException("Password can't be empty");
    }
  }
}
