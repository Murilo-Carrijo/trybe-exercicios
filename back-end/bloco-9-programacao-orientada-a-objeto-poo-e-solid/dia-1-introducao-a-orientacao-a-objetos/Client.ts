 export default class Client {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome precisa ter ao menos 3 caracteres');
    }
    this._name = value;
  }
};