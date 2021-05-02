//Classe abastrata é type tem mesma função,so pequenas diferenças

//primeira particularidade é que em classe abstrata preciso declarar
//modificador de acesso ou seja name,secondName é nameComplete,
//precisaria ser public,private ou proteced
type People = {
  name: string;
  secondName: string;
  nameComplete(): string;
  //nameComplete: () => string;
  //tem dois metodos para chmar a função
};

//Classe abstrata é type ambos são contratos,tudo na classe abastrata
//é tudo em type precisam ser usadas nas classes que são extendidas.
//Quando uma classe é extendida de um tipo usamos a plavra implements
//Posso chmar "n" implements, People,User... ja em classes não posso.
export class User implements People {
  //Não posso alterar os modficadores de acesso,agora casso fosse classe abstrata
  //ao inves de um tipo, seria possivel utilizar public,proteced.
  //Private não poderia,porque modificadores privados podem ser usados
  //apenas dentro da classe patern
  constructor(public name: string, public secondName: string) {}

  nameComplete(): string {
    return `\nNome:${this.name}- Sobrenome:${this.secondName}`;
  }
}

const user = new User('Ricardo', 'kenji');
console.log(user.nameComplete());
