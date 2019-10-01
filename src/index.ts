
// palindrome
const checkString = (str: string): boolean => {
    let palindrome: string = str.split('').reverse().join('');

    if (palindrome === str) { return true; }
    return false;
}

// console.log('tratata', checkString('tratata'))
// console.log('tratatart', checkString('tratatart'))

// fibonacci

const getFibonacci = (num: number): number[] => {
    const arr: number[] = [];
    let sum: number = 0;

    if (num >= 0) { arr.push(0); }
    if (num >= 1) { arr.push(1); }

    while (num >= sum) {
        sum = arr[arr.length - 1] + arr[arr.length - 2];
        arr.push(sum)
        num--;
    }
    return arr;
}

// console.log(27, getFibonacci(27));
// console.log(89, getFibonacci(89));