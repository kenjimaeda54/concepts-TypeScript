export function joinObject<T, U>(item: T, item2: U): T & U {
  return { ...item, ...item2 };
}

//por ser união(intersection) entre objetos,cuidado com as variáreis
//dentro do objeto, se forem iguais vão sobrescreve os valores
const obj1 = { name: 'Ricardo', old: '25' };
const obj2 = { name1: 'Beatriz', old1: '32' };
const joinObj = joinObject(obj1, obj2);
console.table(joinObj);
