//com typeof eu posso pegar o tipo do objeo é tambem o valor que foi inferido
//é a partir do tipo com Keyof eu posso pegar as chaves do objeo em union-type

type CorObj = typeof corObj;
type Key = keyof CorObj;

//interessante que se tornou dinamico,tudo que eu acrescentar aqui
//refelete no keyof e typeof automaticamente
const corObj = {
  vermelho: 'red',
  azul: 'blue',
  amarelo: 'yellow',
  laranja: 'orange',
  preto: 'black',
};

export function translate(cores: CorObj, cor: Key): string {
  return cores[cor];
}

console.log(translate(corObj, 'preto'));
