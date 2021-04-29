//Aqui é um enum de numeros
 enum cores{
    roxo,
    vermelho,
    azul
}
console.log(cores.roxo)

//merger de enum de cores,todda vez que realizo um merge preciso inicializar
//um valor para as restantes variaveis entender qual sua posição,essa posição
//seria o indice
enum cores{
    indio = 30,
    cinza,
    laranja
}

console.log(cores.cinza)
console.log(cores[32])//aqui retorna o laranja indice 32

//enum de strings
export enum strings{
    roxo="Vermelho",
    azul = "Azul",
    preto="Branco",

}

console.log(strings.roxo);

//fazendo uma pequena aplicação com função para saber selecionada.
check(31)
export function check(x: cores): void{
    if( x > 3  && x < 30 && x >33){
        console.log("Não existe essa cor,selecione abaixo de 3 ou acima de 30 ate 32")
        return;
    }else{
        console.log(`Cor selecionada ${cores[x]}` )
        return;
    }
}

