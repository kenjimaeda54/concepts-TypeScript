//quando deseja que uma função nunca retorna nada,você indica o retorno como never
export function error(): never {
  throw new Error('Eu nunca retorno nada');
}

console.log(error());
