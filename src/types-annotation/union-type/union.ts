//unionTypes garonto dois tipos para uma variavel

export function all(x: string | number, y: string | number) {
  if (typeof x === 'number' && typeof y === 'number') return x + y;
  return `${x}${y}`; //nesta linha garanto que se não for um number
  //vai concatenar
}
console.log(all(2, 3));
console.log(all(2, 'a'));
console.log(all('x', 'z'));
