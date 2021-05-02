//agregação são classes que funcionam independentes,porém
//para funcionar corretamente precisa ambas estar juntas
//exemplo: carro é os pneus,ambos vivem separados,mas para o carro
//funcionar precisa dos peneus

export class CarrofPurchases {
  private readonly products: Products[] = [];

  insertProducts(...products: Products[]): void {
    products.forEach((item) => this.products.push(item));
  }
  amountProducts(): number {
    return this.products.length;
  }

  totalProducts(): number {
    return this.products.reduce((ac, item) => (ac += item.price), 0);
  }
}

// ja que nossas variaveis são publicas posso acessar elas sem get e settter
export class Products {
  constructor(public name: string, public price: number) {}
}
//ja que esta publico consigo acessar os produtos sem chamar getter e setter
const consumer1 = new Products('car', 2500);
const consumer2 = new Products('shirt', 150.2);
const consumer3 = new Products('shoe', 102);
const consumer4 = new Products('light bulb', 50);
const all = new CarrofPurchases();

all.insertProducts(consumer1, consumer2, consumer3, consumer4);

console.log(`\nValor total do carrinho é R$ ${all.totalProducts()}`);
console.log(`Quantidade no carrinho ${all.amountProducts()}`);
console.table(all);
