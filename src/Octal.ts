import Converter from './Converter';
import IConverter from './IConverter';

export default class Octal extends Converter implements IConverter {
  public convertTo(num: number): string {
    let tempStr: string = '';
    let tempNum: number = num;

    while (tempNum > 0) {
      const remainder: number = tempNum % 8;

      tempStr = `${remainder}${tempStr}`;
      tempNum = (tempNum - tempNum % 8) / 8;
    }
    return tempStr;
  }

  public convertFrom(str: string): number {
    let tempNum: number = 0;
    let n: number = 0;
    const tempStr: string = str.split('').reverse().join('');

    for (let i: number = 0; i < tempStr.length; i += 1) {
      const charCode: number = tempStr[i].toLocaleLowerCase().charCodeAt(0);

      if (charCode >= 48 && charCode <= 56) {
        n = charCode - 48;
      } else {
        return NaN;
      }

      tempNum += this.pow(8, i) * n;
    }

    return tempNum;
  }
}
