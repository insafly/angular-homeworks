import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'MorseToTextPipe' })

export class MorseToTextPipe implements PipeTransform {
  transform(value: string): string {
    const morseCodes: object = {
      '.-': 'a',
      '-...': 'b',
      '-.-.': 'c',
      '-..': 'd',
      '.': 'e',
      '..-.': 'f',
      '--.': 'g',
      '....': 'h',
      '..': 'i',
      '.---': 'j',
      '-.-': 'k',
      '.-..': 'l',
      '--': 'm',
      '-.': 'n',
      '---': 'o',
      '.--.': 'p',
      '--.-': 'q',
      '.-.': 'r',
      '...': 's',
      '-': 't',
      '..-': 'u',
      '...-': 'v',
      '.--': 'w',
      '-..-': 'x',
      '-.--': 'y',
      '--..': 'z'
    };
    const temp: string[] = (value || '').toLowerCase().split(' ');

    for (let i = 0; i < temp.length; i += 1) {
      temp[i] = morseCodes[temp[i]] || '';
    }

    return temp.join('');
  }
}
