//atributos estaticos,não podem ser estancidos por new
export class People {
  //membro estatico
  static cpfFixed = '00000000';
  static oldFixed = 20;

  constructor(
    private name: string,
    private secondName: string,
    private old: number,
    private cpf: string,
  ) {}

  all(): string {
    return `CPF padrão${People.cpfFixed}, Idade padrão${People.oldFixed} anos`;
  }

  //metodo estatico
  static peoples(name: string, secondName: string): People {
    return new People(name, secondName, People.oldFixed, People.cpfFixed);
  }
}

const peoples = new People('Luiz', 'Miranda', 25, '122-555-1121.55');
const full = People.peoples('Miranda', 'Fernando');
console.log(peoples);
console.log(full);
console.log(peoples.all());
