type Cart = {
  name: string;
  price: number;
};
type Status = 'open' | 'closed';

export class shoopingCart {
  private readonly _itens: Cart[] = [];
  private _orderStatus: Status = 'open';

  addIten(item: Cart): void {
    this._itens.push(item);
  }

  //precisa passar no metodo splice quantidade de itens que deseja excluir a partir do index
  removeItem(index: number): void {
    const remove = this._itens.splice(index, 1);
    const listTotal = remove.map((item) => item.name);
    return console.log(`Removido o item ${listTotal} , removido com sucesso`);
  }

  get itens(): Readonly<Cart[]> {
    return this._itens;
  }

  get orderStatus(): Status {
    return this._orderStatus;
  }
  // to Fixed retorna string  ,por esse motivo foi colocado o +
  //assim retorna number
  valueTotal(): number {
    return +this._itens
      .reduce((acc, item) => (acc += item.price), 0)
      .toFixed(2);
  }

  checkout() {
    if (this.isInputy()) {
      return console.log('Seu carrinho esta vazio');
    }

    this._orderStatus = 'closed';
    this.sendMensage('Seu pedido foi realizado com sucesso');
    this.saveOder();
    this.clear();
  }

  isInputy(): boolean {
    return this._itens.length === 0;
  }

  sendMensage(msg: string): void {
    console.log('Mensagem enviado\n', msg);
  }

  saveOder(): void {
    return console.log('Pedido salvo com sucesso');
  }

  clear(): number {
    console.log('Limpando o carrinho');
    return (this._itens.length = 0);
  }
}

const list = new shoopingCart();
list.addIten({ name: 'lápis', price: 1.68 });
list.addIten({ name: 'caderno', price: 10.68 });
list.addIten({ name: 'roupa', price: 105.11 });
list.removeItem(1);
console.log(`Valor total da lista ${list.valueTotal()}`);
list.checkout();
console.log(list.orderStatus);
