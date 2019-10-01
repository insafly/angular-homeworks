import ConverterBase from './ConverterBase';
import IConverter from './InterfaceConverter';

export default class Binary extends ConverterBase implements IConverter {
    constructor() { 
        super();
    }

    public ConvertTo(num: number) : string {
        let tempStr : string = '';

        while (num > 0) {
            num % 2  === 0 ? tempStr = '0' + tempStr : tempStr = '1' + tempStr;
            num = (num - num % 2) / 2;
        }
        return tempStr;
    }

    public ConvertFrom(str: string) : number {
        let tempNum : number = 0;
        let n : number = 0;
        str = str.split('').reverse().join('');

        for (let i : number = 0; i < str.length; i++) {
            switch (str[i]) {
                case '0': 
                    n = 0;
                    break;

                case '1': 
                    n = 1;
                    break;
                
                default: 
                    return NaN;
            }

            tempNum += this.pow(2, i) * n;
        }

        return tempNum;
    }
}