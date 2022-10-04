class Studants {
  private _registration: string;
  private _name: string;
  private _note: number[] = Array();
  private _workNote: number[] = Array();

  constructor(r: string, name: string, note: number[], workNote: number[]) {
    this._registration = r;
    this._name = name;
    this.note = note;
    this.workNote = workNote;
  };

  public get registration(): string {
    return this._registration;
  }
  public set registration(value: string) {
    this._registration = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get note(): number[] {
    return this._note;
  }
  public set note(value: number[]) {
    if (value.length !== 4) {
      throw new Error('É necessário ter 4 notas de prova');
    }
    this._note = value;
  }

  public get workNote(): number[] {
    return this._workNote;
  }
  public set workNote(value: number[]) {
    if (value.length !== 2) {
     throw new Error('É necessário ter 2 notas de trabalho');
    }
    this._workNote = value;
  }

  sumNote(): number {
    return [...this.note, ...this.workNote].reduce((previousNote, note) => {
      note += previousNote;
      return note;
    }, 0)
  }

  averageNote(): number {
    const sumNotes = this.sumNote();
    const divider = this.note.length + this.workNote.length;
    return Math.round(sumNotes / divider);
  }
};

const studant1 = new Studants('1', 'Murilo', [10, 5, 6, 7], [6, 6]);
console.log(studant1);
console.log('Soma das notas: ', studant1.sumNote());
console.log('Media das notas: ', studant1.averageNote());


const studant2 = new Studants('2', 'João', [10, 10, 6, 9], [7, 6]);
console.log(studant2);
console.log('Soma das notas: ', studant2.sumNote());
console.log('Media das notas: ', studant2.averageNote());
