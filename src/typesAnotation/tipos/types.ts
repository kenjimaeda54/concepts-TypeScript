//variaveis primitivas
let nome: string = "Beatriz";
let numbers: number = 1;
let adult: boolean = true;

//array
const peoples: Array<string> = ["Beatriz","Ricardo","Erika"];
const people: string[] = ["Beatriz","Ricardo","Rafael"];

//objetos
let data: {nome: string,idade: number,adult?:boolean}={
  nome:"Ricardo",
  idade:20,
};

//funções
function soma(x:number,y:number){
    return x+y;
}

const plural: (p:number,z:number) => number = (x,y) =>  x+y;

