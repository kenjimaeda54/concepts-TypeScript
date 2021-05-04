interface People<T, U> {
  name: T;
  secondName: T;
  old: U;
}

//determinando o tipo do generic
const user: People<string, number> = {
  name: 'Luiz',
  secondName: 'Carlos',
  old: 30,
};

console.table(user);

//com type e a mesma ideia,aqui linha abaixo  ja declarai o  tipo,
//assim não preciso declarar generic ao chamar o type,vale para também
//interface
type People1<T = string, U = number> = {
  name: T;
  secondName: T;
  old: U;
};

//não preciso declarar o tipo do generic ja foi definido acima
const user1: People1 = {
  name: 'Beatriz',
  secondName: 'Maeda',
  old: 25,
};

console.table(user1);
