//constraints -->> toda vez que desejo restringir  uma função é seu genérico
//utilizo o extends
type Objects = <K, O extends keyof K>(obj: K, index: O) => K[O];

const getKey: Objects = (obj, index) => obj[index];

const animal = {
  color: 'Marrom',
  vacine: ['vacina1', 'vacina2'],
  old: 10,
};

const colors = getKey(animal, 'color');
const vacines = getKey(animal, 'vacine');
console.log(
  ` Minha cor é ${colors},\n Eu tomei a  ${
    vacines[0]
  }, \nMinha idade é  ${getKey(animal, 'old')} anos`,
);
