//Type script  tem seus próprios genéricos. São conhecidos como utillity-type
//Record é um genérico de objetos,você diz o tipo de objeto é o tipo das chaves

// Record<tipo do objeto,tipo das chaves>
export const people: Record<string, string | number> = {
  name: 'Ricardo',
  secondName: 'Maeda',
  old: 20,
};
console.log(people);

type ProtocolPeople = {
  name?: string;
  secondName?: string;
  old?: number;
};

//Required , com required todos os campos se tornam obrigatórios
type RequiredPeople = Required<ProtocolPeople>;
//Partial, tudo que e required se torna opcional
type PartialPeople = Partial<RequiredPeople>;
//Readonly,todos as chaves e tornam readonly
type ReandolyPeople = Readonly<PartialPeople>;
//pick, pego as chaves do meu objeto
type PickPeople = Pick<ReandolyPeople, 'name' | 'old'>;

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
//Ele verifica as chaves que possuem em um objeto é exclui os comuns com outro
type Excludes = Exclude<ABC, CDE>;
type Excludes2 = Exclude<CDE, ABC>;
//Ele verifica as chaves que possuem em um objeto e retorna os comuns com outro
type Extrais = Extract<ABC, CDE>;

type CountMongo = {
  _id: string;
  name: string;
  old: number;
};

type AcountApi = Pick<CountMongo, Exclude<keyof CountMongo, '_id'>> & {
  id: string;
};

const accountMongo: CountMongo = {
  _id: '56f2sd156f1sd54f1s',
  name: 'Luiz',
  old: 20,
};

export function mapAccount(account: CountMongo): AcountApi {
  const { _id, ...accountData } = account;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);
