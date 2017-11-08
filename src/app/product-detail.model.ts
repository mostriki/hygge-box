export class ProductDetail  {
  constructor(
    public boxContents: string[],
    public name: string,
    public monthsRemaining: number,
    public price: number,
    public img: string
  ) {}
}
