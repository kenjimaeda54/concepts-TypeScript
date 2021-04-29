//atributos estaticos,não podem ser estancidos por new
export class People {
  static cpfFixed = '00000000';
  static oldFixed = 20;

  constructor(
    private name: string,
    private secondName: string,
    private old: number,
    private cpf: string,
  ) {}

  complete(): void {
    return console.log(
      `Idade padrão:${People.oldFixed},Cpf padrão:${People.cpfFixed}`,
    );
  }

  static peoples(name: string, secondName: string): People {
    return new People(name, secondName, People.oldFixed, People.cpfFixed);
  }
}

const peoples1 = new People('Luiz', 'Miranda', 30, '122-155-2555');
const people2 = People.peoples('Miranda', 'Ferando');
console.log(people2);
console.log(peoples1);
//aqui chamei um metodo estanciado por new e retornei dois membros estaticos
peoples1.complete();
