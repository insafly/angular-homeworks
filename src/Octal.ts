import ConverterBase from './ConverterBase';
import IConverter from './InterfaceConverter';

export default class Octal extends ConverterBase implements IConverter {
    constructor() { 
        super();
    }

    public ConvertTo(num: number) : string {
        let tempStr : string = '';

        while (num > 0) {
            switch (num % 8) {
                case 0: 
                    tempStr = '0' + tempStr;
                    break;

                case 1: 
                    tempStr = '1' + tempStr;
                    break;
                
                case 2: 
                    tempStr = '2' + tempStr;
                    break;

                case 3: 
                    tempStr = '3' + tempStr;
                    break;
                
                case 4: 
                    tempStr = '4' + tempStr;
                    break;

                case 5: 
                    tempStr = '5' + tempStr;
                    break;
                
                case 6: 
                    tempStr = '6' + tempStr;
                    break;

                case 7: 
                    tempStr = '7' + tempStr;
                    break;
            }
            
            num = (num - num % 8) / 8;
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

            tempNum += this.pow(8, i) * n;
        }

        return tempNum;
    }
}