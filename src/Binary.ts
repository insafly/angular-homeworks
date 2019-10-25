import Converter from './Converter';
import IConverter from './IConverter';

export default class Binary extends Converter implements IConverter {
  public convertTo(num: number): string {
    let tempStr: string = '';
    let tempNum: number = num;

    while (tempNum > 0) {
      tempNum % 2 === 0 ? tempStr = `0${tempStr}` : tempStr = `1${tempStr}`;
      tempNum = (tempNum - tempNum % 2) / 2;
    }
    return tempStr;
  }

  public convertFrom(str: string): number {
    let tempNum: number = 0;
    let n: number = 0;
    const tempStr = str.split('').reverse().join('');

    for (let i: number = 0; i < tempStr.length; i += 1) {
      const charCode: number = tempStr[i].toLocaleLowerCase().charCodeAt(0);

      if (charCode >= 48 && charCode <= 49) {
        n = charCode - 48;
      } else {
        return NaN;
      }
      tempNum += this.pow(2, i) * n;
    }

    return tempNum;
  }
}
