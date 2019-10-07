export default abstract class Converter {
  protected pow = (a: number, n: number): number => {
    if (n === 0) {
      return 1;
    }

    let b: number = a;
    for (let i: number = 1; i < n; i += 1) {
      b *= a;
    }
    return b;
  }
}
