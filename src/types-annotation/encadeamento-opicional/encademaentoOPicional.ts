//Encadeamento opcional é coalescencia nulla
//Encademento opcioal e representado por ? Verifica se tem objeto
//Coalescencia nulla verifica se não é um não valor.
//Não é um valor em java script undefind é null

type Documents = {
  title: string;
  text: string;
  date?: Date;
};

const documents: Documents = {
  title: 'Encadeamento opcicional e coalescencia nulla',
  text: "'Aprendendo type script,recurso do java script 2020'",
  //date: new Date(),
  //se retirar esse objeto date vai retornar no console.log(undefined)
};

console.log(documents.title);
//aqui estou verificando se no tipo Documents,chave date possui um objeto
//se não possuir retorna undefined
console.log(documents.date?.toDateString());

// coalescencia nulla garanto se for
//undefind ou null, retorna algo que determinei apos ??
console.log(documents.date?.toDateString() ?? 'Não existe essa data');
console.log(null ?? 'Se for nullo retorno isso');
console.log(false ?? 'False não é um não valor,então retorno false');
