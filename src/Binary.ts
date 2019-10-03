import ConverterBase from './ConverterBase';
import IConverter from './IConverter';

export default class Binary extends ConverterBase implements IConverter {
  constructor() {
    super();
  }

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

    for (let i: number = 0; i < tempStr.length; i = i + 1) {
      switch (tempStr[i]) {
        case '0':
          n = 0;
          break;

        case '1':
          n = 1;
          break;

        default:
          return NaN;
      }

      tempNum = tempNum + this.pow(2, i) * n;
    }

    return tempNum;
  }
}
