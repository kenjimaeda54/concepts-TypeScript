//Union type ideia é simalar ao Or
//Intersection type ideia é  simalar ao And

//resultado dessa intersection sera AC
type Ab = "AB" | "AC";
type Ac = "AC" | "AD";
type Results = Ab & Ac;
//const check:Results
// se passar o mause na variavel check seu valor é apenas AC

type Name = {name:string};
type SecondName =  {secondName:string};
type Old = {old:number};

type People = Name & SecondName & Old;
// se eu utiliza-se o  union types ao inves de intersection types,
// typeScript não iria obrigar os campos no objeto people

export const people:People ={
     name:'Pereira',
     secondName:"Luiz",
     old:25
}
console.table(people)

