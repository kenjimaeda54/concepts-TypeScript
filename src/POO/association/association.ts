//esse tipo de assoiação e ligação fraca,porque estamos apenas
//usando as classes  para determinada coisa sem ambas
//necessariamente depender uma das outras
export class Escritor {
  private _ferrament: Ferrament | null = null;
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

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
  constructor(protected _name: string) {}

  get name(): string {
    return this._name;
  }
  abstract write(): void;
}

export class Pen extends Ferrament {
  write(): void {
    return console.log(`${this.name} esta escrevendo`);
  }
}

export class Machine extends Ferrament {
  write(): void {
    return console.log(`${this.name} esta digitando`);
  }
}

const pens = new Pen('Bic');
const machines = new Machine('Computer');
const escritors = new Escritor('Luiz');

console.log(pens.name);
console.log(machines.name);
console.log(escritors.name);

//por ser uma assoiação é possivel utilizar o metodo ferrament uma
// unica vez com metodo write
//aqui é o exemplo de associação, com metodo setter e getter
//eu faço associação

escritors.ferrament = pens;
escritors.ferrament = machines;

escritors.write();
