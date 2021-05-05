// value is number // e um predicado de tipos, caso  minha função
//retorna true ,minha variável vai ser o tipo inferido
export function checkNumber(value: unknown): value is number {
  return typeof value === 'number';
}

//recordando reduce retorna apenas um valor
//estou usando minha função para refinar e garantir que o acc
//e o item são números
export function sum<T>(...args: T[]): number {
  const returns = args.reduce((acc, item) => {
    if (checkNumber(acc) && checkNumber(item)) {
      return acc + item;
    }
    return acc;
  }, 0);
  return returns;
}
//por estarmos usando genérico T, nossa função assume o primeiro tipo
//da função , se for um numero será apenas um array de números,
//se for string apenas string
console.log(sum(1, 2, 3, 4, 5));

//aqui e possível fazer dessa forma porque args é um spread operator
console.log(sum(...[1, 2, 3, 4, 'a', 15]));
