//se eu desejar deixar objeto aberto para novas aquisições
const obj:{
  animal: string,
  type:string,
  [key:string]: unknown;
}={
    animal:"Porco",
    type:"Suino"
}

obj.animal="Outro animal";
obj.type ="Outro tipo";
obj.year = 231;
console.table(obj)

//se eu desejar proibir manipular algum dado especifico
//usso a propriedade readonly, se eu tentar declarar novo valor
// para name não consigo,erro "name e apenas leitura"
const objc:{
    readonly name: string;
    year:number;

  }={
      name:"Ricardo Maeda",
      year:2021,
  }

objc.year = 20202020
console.table(objc)



