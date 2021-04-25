//tipo undefined é necessario evitar porque pode gerar serios erros no codigo
let x;
if(typeof x == undefined) x=0;

//tipo declaração de objeto
export function pessoa(name:string,secondName?:string):{
    name:string;
    secondName?:string;
} {
   return {
       name,
       secondName,
   }
}

//null são aceitaveis porém e necessario trabalhar para evitar possiveis erros
//evitar ao maximo any,Typescript e uma linguagem fortemente tipada
export  function soma(x:any){
    if(typeof x === "number") return console.log(x*3);
    return null;
}


//para checar a logica é so substituir o argumentto dentro de soma,comparação é com ===
const somas = soma(2);
if(somas === null) console.log("Conta invalida");

