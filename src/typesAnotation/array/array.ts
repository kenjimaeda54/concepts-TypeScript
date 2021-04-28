//Array<T> ou array[t]
//se a função não declar por inferencia o retorno,você pode declarar

export function multi(...args: Array<number>){
     return args.reduce((ac,valor)=>ac*valor,1)
}

export function conc(...args: string[]){
    return args.reduce((ac,valor)=> ac+valor)
}

export function upper(...args:string[]):string[]{
    return args.map((item) => item.toUpperCase())
}

const multis = multi(1,5,9);
const concs = conc("a","bb","d");
const uppers = upper("a","dd","dsfs")
console.log(`${multis} -->>  ${concs}`);
console.table(uppers)
