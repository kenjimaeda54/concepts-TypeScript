//Type script  tem seus próprios genéricos. São conhecidos como utillity-type
//Record é um genérico de objetos,você diz o tipo de objeto é o tipo das chaves

// Record<tipo do objeto,tipo das chaves>//atenção é objeto não tipos
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

//Required , com required  todos as chaves do type de objeto se tornam obrigatórios
type RequiredPeople = Required<ProtocolPeople>;
//Partial, tudo que é required  no seu type de objeto se torna opcional
type PartialPeople = Partial<RequiredPeople>;
//Readonly,todos as chaves do type de objeto se tornam readonly
type ReandonlyPeople = Readonly<PartialPeople>;
//pick, pego as chaves do meu type de objetos
type PickPeople = Pick<ReandonlyPeople, 'old' | 'name'>;

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

//Ele verifica as chaves que possuem em um type de objetos exclui os comuns com outro,mas retorna so
//primeiro type de objeto da chave
type ABCDE = Exclude<ABC, CDE>;
type ABDE = Exclude<CDE, ABC>;

//Ele verifica as chaves que possuem em um type de  objetos e retorna apenas comuns entre eles
type BDCE = Extract<ABC, CDE>;

type MongoDb = {
  _id: string;
  name: string;
  old: number;
};

//estou usando o pick para pegar objeto CountMongo é com exclude eu comparo objetos,
//por fim retorno  o que não e igual
type MongoApi = Pick<MongoDb, Exclude<keyof MongoDb, '_id'>> & {
  id: string;
};

const accountUser: MongoDb = {
  _id: '1f561sd65f1sd6',
  name: 'Beatriz',
  old: 25,
};

export function convertId(account: MongoDb): MongoApi {
  const { _id, ...accountData } = account;
  return { ...accountData, id: _id };
}

const users = convertId(accountUser);
console.log(users);
