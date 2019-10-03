import ConverterBase from './ConverterBase';
import IConverter from './IConverter';

export default class HexOctal extends ConverterBase implements IConverter {
  constructor() {
    super();
  }

  public convertTo(num: number): string {
    let tempStr: string = '';
    let tempNum: number = num;

    while (tempNum > 0) {
      switch (tempNum % 16) {
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

        case 8:
          tempStr = `8${tempStr}`;
          break;

        case 9:
          tempStr = `9${tempStr}`;
          break;

        case 10:
          tempStr = `a${tempStr}`;
          break;

        case 11:
          tempStr = `b${tempStr}`;
          break;

        case 12:
          tempStr = `c${tempStr}`;
          break;

        case 13:
          tempStr = `d${tempStr}`;
          break;

        case 14:
          tempStr = `e${tempStr}`;
          break;

        case 15:
          tempStr = `f${tempStr}`;
          break;
      }

      tempNum = (tempNum - tempNum % 16) / 16;
    }
    return tempStr;
  }

  public convertFrom(str: string): number {
    let tempNum: number = 0;
    let n: number = 0;
    const tempStr: string = str.split('').reverse().join('');

    for (let i: number = 0; i < tempStr.length; i = i + 1) {
      switch (tempStr[i].toLocaleLowerCase()) {
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

        case '8':
          n = 8;
          break;

        case '9':
          n = 9;
          break;

        case 'a':
          n = 10;
          break;

        case 'b':
          n = 11;
          break;

        case 'c':
          n = 12;
          break;

        case 'd':
          n = 13;
          break;

        case 'e':
          n = 14;
          break;

        case 'f':
          n = 15;
          break;

        default:
          return NaN;
      }

      tempNum = tempNum + this.pow(16, i) * n;
    }

    return tempNum;
  }
}
