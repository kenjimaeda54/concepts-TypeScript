//Type alias basicamente e apelidar nossos tipos
//todo tipo criado por nos inicia com letra maisculo

type Numbers = number;

type Cor1 = "amarelo" | "vermelho" | "azul";
type Cor2 = "cinza" | "roxo" | "vermelho";

type CorFavorite =  Cor1 | Cor2;

type People ={
    name: string;
    idade: Numbers;
    cor?:CorFavorite;
    salario: number;
}

export const people:People ={

     name:"Luiz",
     idade:20,
     salario:12200,

}

export function all (people:People, cor:CorFavorite ):People{
    return  {...people,cor}

}

console.log(all(people,'vermelho'))


