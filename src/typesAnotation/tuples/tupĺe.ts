//tuple é quando desejo  determina variavel não sofra alteração de tipos
//so pode ocorrer alteração de valores

//so consigo alterar  os tipos,se eu colcar array[0] = "fsofm" vai
//gerar erro,porque seu tipo e number,porem consigo alterar o valor
const array1: [number,string] = [1,"Luiz"];
array1[0] = 3
array1[1] = "Ricardo"
console.table(array1)

//deixando o segundo indice ou terceiro item como opcicional
//no console.table não aparece  indice 3 porque é opcicional
const array2: [number,string,number?] = [1,"Beatriz"];
console.table(array2);

//para deixar um tuple imutavel  tem duas opções
//dessa forma não consigo alterar nada
const array3: readonly [string,string] = ["Ricardo","Beatriz"];
const array4: ReadonlyArray<number> = [1,5.8,9,2152];
console.table(array3);
console.table(array4);

//ultima opção e deixar meu array aberto para varios valores de um determinado
//tipo,aqui tenho "n" numeros de array de string possivel
const array5: [number,number,...string[]] = [1,2,"Ricardo","Beatriz"]
console.log(array5[3]);

