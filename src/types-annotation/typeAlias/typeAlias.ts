//Type alias basicamente e apelidar nossos tipos
//todo tipo criado por nos inicia com letra maisculo

type Numbers = number;

type cor1 = "aramelo" | "vermelho" | "azul"
type cor2 = "cinza" | "vermelho" | "preto"
type CorFavorite = cor1 | cor2

type People ={
    name: string,
    idade: Numbers,
    corFavorite?:string,
    salario:number
}

export const people:People = {
     name:"Luiz",
     idade:30,
     salario:1200,

}

export function all (people:People, cor:CorFavorite): People{
    return {...people,corFavorite:cor}
}

console.log(all(people,'azul'))


