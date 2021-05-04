//constraints -->> toda vez que desejo restringir  uma função é seu genérico
//utilizo o extends
type Objetes = <O, K extends keyof O>(obj: O, index: K) => O[K];

export const getKey: Objetes = (key, value) => key[value];

const animal = {
  cor: 'Marrom',
  vacinas: ['vacina 1', 'vacina 2'],
  idade: 10,
};

const key = getKey(animal, 'vacinas');
const keyCor = getKey(animal, 'cor');
console.log(key[1], keyCor, getKey(animal, 'idade'));
console.log(key);
