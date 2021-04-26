//variaveis literais são aquelas que assumem valores como tipo
// exemplo const x = 10 --- tipo da variavel x é o seu valor 10

export const people={
    nome:"Luiz" as const,//aqui estou fazendo uma inserção,tipo do nome é Luiz
    sobrenome:"Carlos"
}

//exemplo de inserção de valores bastante uteis.
//dessa forma garanto por inserção que o tipo da variavel cor é vermlho,
//azul ou amarelo
export function changeColor(cor: 'Vermelho' | 'Azul' | "Amarelo" ):string{
    return cor
}

const color = changeColor('Amarelo');
console.log(color)