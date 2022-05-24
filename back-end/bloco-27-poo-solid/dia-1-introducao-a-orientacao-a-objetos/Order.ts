import Client from './Client';
import OrderItem from './OrderItem';

class Order {
  private _client: Client;
  private _items: OrderItem[];
  private _payment: string;
  private _discount: number;

  constructor(
    client: Client,
    items: OrderItem[],
    payment: string,
    discount: number,
  ) {
    this._client = client;
    this._items = items;
    this._payment = payment;
    this._discount = discount;
  }

  public get client(): Client {
    return this._client;
  }
  public set client(value: Client) {
    this._client = value;
  }

  public get items(): OrderItem[] {
    return this._items;
  }
  public set items(value: OrderItem[]) {
    if (value.length === 0) throw new Error('O pedido precisa ter ao menos um item');
    this._items = value;
  }

  public get payment(): string {
    return this._payment;
  }
  public set payment(value: string) {
    this._payment = value;
  }

  public get discount(): number {
    return this._discount;
  }
  public set discount(value: number) {
    if (value < 0) throw new Error('O desconto não pode ter valor negativo');
    this._discount = value;
  }

  totalOrder(): number {
    return this.items.reduce((previousValue, item) => {
      const total = previousValue += item.price;

      return total;
    }, 0);
  }

  totalOrderDescount(): number {
    const total = this.totalOrder();
    return total - (total * this._discount);
  }

}

const client = new Client('João');

const sandwiche = new OrderItem('Sandwiche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxí', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);

const order = new Order(client, [sandwiche, juice, dessert], 'dinheiro', 0.10);

console.log(order);
console.log('Valor total: ', order.totalOrder());
console.log('Valor total com desconto: ', order.totalOrderDescount());
