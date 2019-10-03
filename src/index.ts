// palindrome
const checkString = (str: string): boolean => str.split('').reverse().join('') === str;

// fibonacciNumbers
const fibonacciNumbers = (num: number): number[] => {
  const arr: number[] = [];
  let sum: number = 0;
  let tempNum: number = num;
  if (num >= 0) {
    arr.push(0);
  }
  if (num >= 1) {
    arr.push(1);
  }

  while (tempNum >= sum) {
    sum = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(sum);
    tempNum = tempNum - 1;
  }
  return arr;
};
