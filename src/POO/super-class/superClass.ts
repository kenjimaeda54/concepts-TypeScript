export class People {
  constructor(
    public name: string,
    public secondNmae: string,
    private old: number,
    protected cpf: string,
  ) {}

  getCpf(): string {
    return `Cpf:${this.cpf}`;
  }

  getOld(): string {
    return `Idade:${this.old}anos`;
  }

  getName(): string {
    return `Nome: ${this.name} Sobrenome:${this.secondNmae}`;
  }
}

//Aplicando conceito de super class.
//Utilizo subclasse para pegar os valores da super classe(classe partn,classe base)
export class Student extends People {
  constructor(
    name: string,
    secondName: string,
    old: number,
    cpf: string,
    public room: number,
  ) {
    super(name, secondName, old, cpf);
  }

  getName(): string {
    console.log('Fazendo alguma coisa');
    const results = super.getName();
    return `${results} heyyyy`;
  }
}

export class Client extends People {
  //isso reflete polimorfismo
  getName(): string {
    return `Nome do cliente:${this.name} Sobrenome:${this.secondNmae}`;
  }
}

//por herança em new Pople,new Student,new Cliente
// estou recebendo tudo da classe People
const people1 = new People('Luiz', 'Miranda', 25, '51516-5');

///people2 esta com valor mais no campo,em relação aos outros
//porque foi determinado na classe Studente
const people2 = new Student('Rafael', 'Kink', 20, '551516-5', 55);
const people3 = new Client('Beatriz', 'Miranda', 32, '52126-5');
console.log(people1.getName());
console.log(people2.getName());
console.log(people3.getName());
