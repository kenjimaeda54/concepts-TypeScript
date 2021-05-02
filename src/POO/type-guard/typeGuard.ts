//type Guard,seria refinamento do codigo,para evitar futuros problemas
export function add(a: unknown, b: unknown): number | string {
  return typeof a == 'number' && typeof b == 'number' ? a + b : `${a}${b}`;
}

console.log(add(2, 3));
console.log(add('a', 'b'));

//com id fica  é facil eu refinar meu codigo.
type People = { id: 'people'; name: string };
type Animal = { id: 'animal'; cor: string };
type Selector = People | Animal;

export class User implements People {
  id: 'people' = 'people';
  constructor(public name: string) {}
}

//principios de type guard ou seja refinando as posibilidades
export function checkName(item: Selector): void {
  if ('name' in item) console.log(item.name);
  if (item instanceof User) console.log(item.name);
  switch (item.id) {
    case 'people':
      console.log(item.name);
      return;
    case 'animal':
      console.log('Isso é um animal', item.cor);
      return;
  }
}

checkName(new User('Fernado'));
checkName({ id: 'animal', cor: 'Marrom' });
