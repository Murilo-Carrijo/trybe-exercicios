export default class Data {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor (day: number, month: number, year: number) {
    const fullDate = `${year}-${month}-${day}`;

    if (new Date(fullDate).getDate() !== day) {
        this._day = 1;
        this._month = 1;
        this._year = 1900;
      } else {
        this._day = day;
        this._month = month;
        this._year = year;
      }
  }

  public get day(): number {
    return this._day;
  }
  public set day(value: number) {
    this._day = value;
  }

  public get month(): number {
    return this._month;
  }
  public set month(value: number) {
    this._month = value;
  }

  public get year(): number {
    return this._year;
  }
  public set year(value: number) {
    this._year = value;
  }

}

const data1 = new Data(17, 11, 1989);
console.log(data1);
