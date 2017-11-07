export class UserDetails {
  constructor(
    public firstName: string,
    public lastName: string,
    public streetAddress: string,
    public addressLine2: string,
    public city: string,
    public state: string,
    public zip: number,

    // use an api to grab actual billing info

    public billingStreetAddress: string,
    public billingAddressLine2: string,
    public billingCity: string,
    public billingState: string,
    public billingZip: number,

    public promoCode: string,
    public isGift: boolean,
    public giftMessage: string,
  ) {}
}
