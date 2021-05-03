//type Guard,seria refinamento do codigo,para evitar futuros problemas
export function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(2, 3));
console.log(add('a', 'fsfs'));

//com id fica  é facil eu refinar meu codigo.
type Peopĺe = { id: 'people'; name: string };
type Animal = { id: 'animal'; cor: string };
type Selector = Peopĺe | Animal;
export class user implements Peopĺe {
  id: 'people' = 'people';
  constructor(public name: string) {}
}

//principios de type guard ou seja refinando as posibilidades
// if é um swtich são validos para refinar codigo,esses tres metodos são type guard
export function checkName(item: Selector): void {
  if ('name' in item) console.log(item.name);
  if (item instanceof user) console.log(item.name);
  switch (item.id) {
    case 'people':
      console.log(`Eu sou ${item.name}`);
      return;
    case 'animal':
      console.log(`Eu sou animal da cor ${item.cor}`);
      return;
  }
}

checkName(new user('Maraysa'));
checkName({ id: 'animal', cor: 'Rosa' });
