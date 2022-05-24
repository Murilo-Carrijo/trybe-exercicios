export default class Dates {
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
    if (value > 12) throw new Error('O mês informado é inválido');
    
    this._month = value;
  }

  public get year(): number {
    return this._year;
  }
  public set year(value: number) {
    this._year = value;
  }

  getMonthName(): string {
    const months = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ];

    return months[this.month - 1];
  }

  isLeapYear(): boolean {
    return this._year % 4 === 0;
  }

  verifyDate(date: Dates): number {
    const currentDate = `${this._year}-${this._month}-${this._day}`;
    const newDate = `${date.year}-${date.month}-${date.day}`;

    if (new Date(currentDate) > new Date(newDate)) return 1;
    if (new Date(currentDate) < new Date(newDate)) return -1;

    return 0;
  }

}

const data1 = new Dates(17, 10, 1988);
console.log(data1);
console.log('Dia: ', data1.day);
console.log('Mês: ', data1.month);
console.log('Ano: ', data1.year);
console.log('Mês por extenso: ', data1.getMonthName());
console.log('Ano bissexto: ', data1.isLeapYear());

const otherDate = new Dates(30, 1, 2021);

const verify = data1.verifyDate(otherDate);
const compareStates = ['anterior', 'igual', 'posterior'];
console.log(`A primeira data é ${compareStates[verify + 1]} a segunda.`);


