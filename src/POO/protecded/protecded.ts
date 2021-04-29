//public --- posso acessar em qualquer lugar
//private-- - posso acesssar somente na classe que foi criado
//protecded--- posso aacessar na classe que foi criado e sub classe
export class Company {
  public readonly name: string;
  protected readonly collaborator: Collaborator[] = [];
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

export class Udemy extends Company {
  constructor() {
    super('Udemy', '5151515');
  }

  delete(): Collaborator | null {
    const remove = this.collaborator.pop();
    if (remove) return remove;
    return null;
  }
}

export class Collaborator {
  constructor(
    public readonly name: string,
    public readonly secondName: string,
  ) {}
}

const company1 = new Udemy();
const company2 = new Company('Facebook', '414554485');
const newCollaborator1 = new Collaborator('Luiz', 'Miranda');
const newCollaborator2 = new Collaborator('Beatriz', 'Silva');
company2.addCollaborator(newCollaborator2);
company1.showCollaborator();
console.log(company2);
company1.addCollaborator(newCollaborator1);
console.log(company1);
const removeCollaborator = company1.delete();
console.log(company1);
console.log(removeCollaborator);
