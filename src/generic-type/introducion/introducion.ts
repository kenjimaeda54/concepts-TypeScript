//quando você recebe valores e não sabe o tipo,ideial usar generic
//exemplo banco de dados,api..
type Callback<U> = (value: U, index?: number, array?: U[]) => boolean;

export function myFilter<T>(array: T[], callback: Callback<T>): T[] {
  const newArray: T[] = [];

  array.forEach((item) => {
    if (callback(item)) newArray.push(item);
  });
  return newArray;
}

//o tipo do array é automaticamente inferido na função filter pelo generic
//recordando callback são funções
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const results = array.filter((item) => item < 5);
const filters = myFilter(array, (value) => value < 8);
console.table(results);
console.table(filters);
