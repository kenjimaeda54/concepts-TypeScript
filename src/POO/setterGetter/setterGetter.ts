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

const nameCompleted = new People('Ricardo', 'Maeda', 25, '125-222-212.55');
//aqui uso o setter
nameCompleted.cpf = '12522221255';
//aqui eu uso getter
console.log(nameCompleted.cpf);
