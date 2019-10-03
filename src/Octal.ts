import ConverterBase from './ConverterBase';
import IConverter from './IConverter';

export default class Octal extends ConverterBase implements IConverter {
  constructor() {
    super();
  }

  public convertTo(num: number): string {
    let tempStr: string = '';
    let tempNum: number = num;

    while (tempNum > 0) {
      switch (tempNum % 8) {
        case 0:
          tempStr = `0${tempStr}`;
          break;

        case 1:
          tempStr = `1${tempStr}`;
          break;

        case 2:
          tempStr = `2${tempStr}`;
          break;

        case 3:
          tempStr = `3${tempStr}`;
          break;

        case 4:
          tempStr = `4${tempStr}`;
          break;

        case 5:
          tempStr = `5${tempStr}`;
          break;

        case 6:
          tempStr = `6${tempStr}`;
          break;

        case 7:
          tempStr = `7${tempStr}`;
          break;
      }

      tempNum = (tempNum - tempNum % 8) / 8;
    }
    return tempStr;
  }

  public convertFrom(str: string): number {
    let tempNum: number = 0;
    let n: number = 0;
    const tempStr: string = str.split('').reverse().join('');

    for (let i: number = 0; i < tempStr.length; i = i + 1) {
      switch (tempStr[i]) {
        case '0':
          n = 0;
          break;

        case '1':
          n = 1;
          break;

        case '2':
          n = 2;
          break;

        case '3':
          n = 3;
          break;

        case '4':
          n = 4;
          break;

        case '5':
          n = 5;
          break;

        case '6':
          n = 6;
          break;

        case '7':
          n = 7;
          break;

        default:
          return NaN;
      }

      tempNum = tempNum + this.pow(8, i) * n;
    }

    return tempNum;
  }
}
