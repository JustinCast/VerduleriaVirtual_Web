export class PurchaseReport {
  constructor(
    public product_name?: string,
    public _total_product?: number,
    public price?: number,
    public total_price?: number,
    public _date?: Date
  ) {}
}