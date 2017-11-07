export class ProductDetails {
  public boxContents: any = [];
  constructor(
    public name: string,
    public monthsRemaining: number,
    public price: number,
  ) {}
}
