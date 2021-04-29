export class People {
  constructor(
    public name: string,
    public secondNmae: string,
    private old: number,
    protected cpf: string,
  ) {}

  getCpf(): string {
    return `CPF:${this.cpf}`;
  }

  getOld(): string {
    return `Idade:${this.old} anos`;
  }

  getName(): string {
    return `Nome:${this.name}   Sobrenome:${this.secondNmae}  `;
  }
}

//isto é herança. Neste caso estamos herdando de classe concreta
//polimorfismo ---//duas classes do mesmo tipo implementam metodos de forma diferente
export class Student extends People {
  //aqui reflete polimorfismo
  getName(): string {
    return `Nome do estudante:${this.name}  Sobrenome:${this.secondNmae} `;
  }
}

export class Client extends People {
  //isso reflete polimorfismo
  getName(): string {
    return `Nome do clinte:${this.name} Sobrenome:${this.secondNmae} `;
  }
}

//por herança em new Pople,new Student,new Cliente
// estou recebendo tudo da classe People
const people1 = new People('Ricardo', 'Miranda', 29, '121515');

//por ser tratar de herança herdada de classe concreta,consigo acessar
//tudo em new student, new Client.
const people2 = new Student('Erika', 'Joao', 21, '15151515');
const people3 = new Client('Matheus', 'Salvador', 35, '8881515');

console.log(people1.getName());
console.log(people2.getName());
console.log(people3.getName());
