import Converter from './Converter';
import IConverter from './IConverter';

export default class HexOctal extends Converter implements IConverter {
  public convertTo(num: number): string {
    let tempStr: string = '';
    let tempNum: number = num;

    while (tempNum > 0) {
      const remainder: number = tempNum % 16;

      if (remainder < 10) {
        tempStr = `${remainder}${tempStr}`;
      } else {
        tempStr = `${String.fromCharCode('a'.charCodeAt(0) + remainder - 10)}${tempStr}`;
      }

      tempNum = (tempNum - tempNum % 16) / 16;
    }
    return tempStr;
  }

  public convertFrom(str: string): number {
    let tempNum: number = 0;
    let n: number = 0;
    const tempStr: string = str.split('').reverse().join('');

    for (let i: number = 0; i < tempStr.length; i += 1) {
      const charCode: number = tempStr[i].toLocaleLowerCase().charCodeAt(0);

      if (charCode >= 48 && charCode <= 57) {
        n = charCode - 48;
      } else if (charCode >= 97 && charCode <= 102) {
        n = charCode - 87;
      } else {
        return NaN;
      }
      tempNum += this.pow(16, i) * n;
    }

    return tempNum;
  }
}
