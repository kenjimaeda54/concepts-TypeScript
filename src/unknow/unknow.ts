//este tipo é parecido com any,porém mais seguro,
//toda vez que desejar algo que não sabe o timpo unknow e ideial.

let x:unknown;


x = "Luiz"
x = 8020

let y = 12020

//ao tentar realizar esse procedimento vai gerar erro,porque unknow obriga
//primeiro verificar para depois realizar algo
if(typeof x==="number") console.log(x+y);