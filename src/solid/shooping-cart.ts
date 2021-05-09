type Cart = {
  name: string;
  price: number;
};

type OrderStatus = 'open' | 'closed';

export class shoppingCart {
  private readonly _cartItens: Cart[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItens(item: Cart): void {
    this._cartItens.push(item);
  }

  //método splice necessita de dois parâmetros  para funcionar corretamente,primeiro o índice
  // é  segundo é   total que deseja excluir
  removeItens(index: number): void {
    const remove = this._cartItens.splice(index, 1);
    const itensRemove = remove.map((item) => item.name);
    return console.log(` Item ${itensRemove} removido com sucesso `);
  }

  get carIten(): Readonly<Cart[]> {
    return this._cartItens;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  //toFixed retorna uma string,para return number,solução simples foi colocar o sinal de +
  valueTotal(): number {
    return +this._cartItens
      .reduce((acc, item) => (acc += item.price), 0)
      .toFixed(2);
  }

  isInput(): boolean {
    return this._cartItens.length === 0;
  }

  checkOut(): void {
    if (this.isInput()) {
      console.log('Seu carrinho esta vazio adiciona algo por favor');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMensage('Pedido realizado com sucesso');
    this.saveOrder();
    this.clear();
  }

  sendMensage(msg: string): void {
    return console.log('Salvo com sucesso\n', msg);
  }

  saveOrder(): void {
    return console.log('Pedido concluido');
  }

  clear(): number {
    console.log('Carrinho limpo');
    return (this._cartItens.length = 0);
  }
}

const shoppinList = new shoppingCart();
shoppinList.checkOut();
shoppinList.addItens({ name: 'Lapis', price: 1.88 });
shoppinList.addItens({ name: 'Roupa', price: 55.6 });
shoppinList.addItens({ name: 'Sapato', price: 88.88 });
console.log(shoppinList.carIten);
console.log(
  `Seu carrinho esta com preço total de  R$ ${shoppinList.valueTotal()}`,
);
shoppinList.removeItens(2);
console.log(
  `Seu carrinho esta com preço total de  R$ ${shoppinList.valueTotal()}`,
);
shoppinList.checkOut();
console.log(shoppinList.orderStatus);
console.log(
  `Seu carrinho esta com preço total de  R$ ${shoppinList.valueTotal()}`,
);
