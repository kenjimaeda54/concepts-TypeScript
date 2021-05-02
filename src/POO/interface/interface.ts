//Interfaces é type alias são mesma coisa
//Diferença esta que interface são implicidaemente para modelar objetos

interface People {
  name: string;
  secondName: string;
  nameComplete(): string;
  //nameComplete: () => string;
  //tem dois metodos para chmar a função
}

//diferenças são minimias exemplo se possuir mais que um tipo e queria união
//seria assim

//type People1 = People2 & Peoples3

//agora em interface seria dessa forma
// interface People1 extendes People2,People3 {}

export class User implements People {
  constructor(public name: string, public secondName: string) {}

  nameComplete(): string {
    return `\nNome:${this.name}- Sobrenome:${this.secondName}`;
  }
}

const user = new User('Ricardo', 'kenji');
console.log(user.nameComplete());
