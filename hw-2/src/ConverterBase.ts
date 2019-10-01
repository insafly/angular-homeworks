export default class ConverterBase {
    protected pow = (a : number, n : number) : number => {
        if (n === 0) { return 1; }

        let b: number = a;
        for (let i : number = 1; i < n; i++) {
            b *= a;
        }
        return b;
    }
}