export class ProductDetail  {
  public boxContents: any = [];
  constructor(
    public name: string,
    public monthsRemaining: number,
    public price: number,
    public imgs: string[]
  ) {}
}
