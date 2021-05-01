//esse tipo de assoiação e ligação fraca,porque estamos apenas
//usando as classes  para determinada coisa sem ambas
//necessariamente depender uma das outras
export class Escrictor {
  protected _ferrament: Ferrament | null = null;
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }
  //utilizando metodo set para associar a classe ferramenta
  set ferrament(ferrament: Ferrament | null) {
    this._ferrament = ferrament;
  }

  get ferrament(): Ferrament | null {
    return this._ferrament;
  }
  write(): void {
    if (this.ferrament === null) {
      console.log('Eu não consigo escrever');
      return;
    }
    return this.ferrament.write();
  }
}

export abstract class Ferrament {
  constructor(private _name: string) {}
  abstract write(): void;

  get name(): string {
    return this._name;
  }
}

export class Pen extends Ferrament {
  write(): void {
    console.log(`${this.name} esta escrevendo `);
  }
}

export class Machine extends Ferrament {
  write(): void {
    console.log(`${this.name} esta digitando`);
  }
}

const write1 = new Pen('Bic');
const write2 = new Machine('Computer');
const write3 = new Escrictor('Robot');

console.log(write1.name);
console.log(write2.name);
console.log(write3.name);

//por ser uma assoiação é possivel utilizar o metodo ferrament apenas
//com unica vez com metodo write
write3.ferrament = write1;
write3.write();
