export default class OrderItem {
  private _product: string;
  private _price: number;

  constructor(product: string, price: number) {
    this._product = product;
    this._price = price;
  }

  public get product(): string {
    return this._product;
  }
  public set product(value: string) {
    if (value.length < 3) throw new Error('O produto deve ter um nome com ao menos 3 caracteres');
    this._product = value;
  }

  public get price(): number {
    return this._price;
}
  public set price(value: number) {
    if (value < 1) throw new Error('O preço tem que ser maior do que 0');
    this._price = value;
  }  
};