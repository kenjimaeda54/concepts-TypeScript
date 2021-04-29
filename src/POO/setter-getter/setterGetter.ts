//normalmente ao usar getter e setter nos usamos _ na variavel
//vai sutentar valor (_cpf)
export class People {
  constructor(
    private name: string,
    private secondName: string,
    private old: number,
    private _cpf: string,
  ) {}

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf;
  }
}

const nameCompleted = new People('Ricardo', 'Maeda', 20, '122-555-123131.255');
//aqui utilizo o setter para formatar o cpf
nameCompleted.cpf = '122555123131255';
//aqui utilizo o getter
console.log(nameCompleted.cpf);
