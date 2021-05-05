//abaixo e a estrutura de pilha ou stack;
//normalmente quando uma estrutura de dados esta pronta é retorna,
//type script,vai conseguir inferir,quando é você que cria
//pode ser que não inferir dai você precisa informar,ficar atento

export class stack<T> {
  //se não possuir construtores,não consigo passar valores para classe
  //apenas instanciar seus métodos

  private counter = 0;
  private elements: { [index: number]: T } = {};

  add(item: T): void {
    this.elements[this.counter] = item;
    this.counter++;
  }
  emptyItem(): boolean {
    return this.counter === 0;
  }
  remove(): T | void {
    if (this.emptyItem()) return undefined;

    this.counter--;
    const element = this.elements[this.counter];
    delete this.elements[this.counter];
    return element;
  }

  total(): number | string {
    if (this.emptyItem()) return `Lista vazia`;
    return this.counter;
  }
}
//Sem o tipo genérico ele vai acusar <unknown> mesmo instanciando métodos
//Lembrete o tipo genérico tipado será valido para todos da sua classe
//Normalmente quando e um classe criada por nos,pode ocorrer isto
const checkStack = new stack<number>();
//imprime na tela lista vazia,porque não possui nenhum item na stack
console.log(checkStack.total());
checkStack.add(5);
checkStack.add(7);
checkStack.add(12);
checkStack.add(3);
//mostro a quantidade dos meus itens
console.log(checkStack.total());
//removo o ultimo elemento
checkStack.remove();
console.log(checkStack.total());
