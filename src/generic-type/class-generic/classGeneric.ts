//abaixo e a estrutura de pilha ou stack;
//normalmente quando uma estrutura de dados esta pronta é retorna,
//type script,vai conseguir inferir,quando é você que cria
//pode ser que não inferir dai você precisa informar,ficar atento

import { isEmpty } from 'lodash';

export class stack<T> {
  //se não possuir construtores,não consigo passar valores para classe
  private counter = 0;
  private elements: { [k: number]: T } = {};

  add(item: T): void {
    this.elements[this.counter] = item;
    this.counter++;
  }

  remove(): T | void {
    if (this.empty()) return undefined;

    this.counter--;
    const element = this.elements[this.counter];
    delete this.elements[this.counter];
    return element;
  }

  empty(): boolean {
    return this.counter === 0;
  }

  max(): number {
    return this.counter;
  }
}

//sem o tipo genérico ele vai acusar <unknown> mesmo instanciando métodos
//se eu tipa minha classe como number| string, serão possíveis
//estes valores
//normalmente quando e um classe criada por nos,pode ocorrer isto
const manipulation = new stack<number>();
manipulation.add(5);
manipulation.add(10);
manipulation.add(20);
manipulation.add(15);
//mostro a quantidade dos meus itens
console.log(manipulation.max());
//removo o ultimo elemento
manipulation.remove();
console.log(manipulation.max());
