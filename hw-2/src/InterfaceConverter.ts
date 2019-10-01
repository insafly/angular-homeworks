export default interface IConverter {
    ConvertTo(num : number) :string;
    ConvertFrom(str : string) : number;
}