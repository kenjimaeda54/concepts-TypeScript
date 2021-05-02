//merge declaration

interface People {
  name: string;
}

//exemplo basico de merge declartion
interface People {
  readonly secondName: string;
  readonly old?: number;
  // o simbolo ? determino que pode ser undefined e com readonly
  //determino quqe caso tenho algo precisa ser declarado no objeto
  readonly adress: string;
}

export const user: People = {
  name: 'Ricardo',
  secondName: 'Meda',
  old: 32,
  adress: 'Rua pereira',
};
//por ser readonly não consigo acessar diretamente minha interface
//user.secondName = 'LUiz';

console.table(user);
