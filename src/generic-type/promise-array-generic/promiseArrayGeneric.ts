//Promisse e array são tipos genericos do java scrpit
type MyType = number;

//<aqui declaro o tipo do generico>
//pode ser tipo que criei ou variveis primitivas
function myPromisse(): Promise<MyType | string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('deu certo');
    }, 1000);
  });
}
myPromisse().then((results) => console.log(results));

//para declarar array existe essa maneira tambem,neste caso
//se algum valor do array não for number gera erro
const array: Array<number> = [1, 2, 3, 3, 5, 6, 7, 8];
console.table(array.map((item) => item * 2));
