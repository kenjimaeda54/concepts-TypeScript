export type Numbers = {
  (x: number): number;
  (x: number, y: number): number;
  (...args: number[]): number;
};

//overload de funções e compartar minha função de forma diferente,
//baseado nos parametros recebe
export const over: Numbers = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0)
    return args.reduce((ac, item) => ac + item, 0) + x + (y || 0);
  return x + (y || 0);
};

console.log(over(3));
console.log(over(3, 2));
console.log(over(3, 2, 5, 1));
