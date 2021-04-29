//criando classe
export class Company {
  public readonly name: string;
  private readonly collaborator: Collaborator[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
  //criando metodo para adiconar colaborador na classe empressa
  addCollaborator(collaborator: Collaborator): void {
    this.collaborator.push(collaborator);
  }
  //criando metodo para mostrar os colaboradores na classe empressa
  showCollaborator(): void {
    this.collaborator.forEach((item) => console.table(item));
  }
}

//forma reduzida de criar uma classe
export class Collaborator {
  constructor(
    public readonly name: string,
    public readonly secondName: string,
  ) {}
}

const company1 = new Company('Udemy', '18515815');
const company2 = new Company('Facebook', '414554485');
const newCollaborator1 = new Collaborator('Luiz', 'Miranda');
const newCollaborator2 = new Collaborator('Beatriz', 'Silva');
company1.addCollaborator(newCollaborator1);
company2.addCollaborator(newCollaborator2);
company1.showCollaborator();
company2.showCollaborator();
console.log(company1);
console.log(company2);
