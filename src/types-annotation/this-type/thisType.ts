export class Calc {
  constructor(protected number: number) {}

  mult(n: number): this {
    this.number *= n;
    return this;
  }
  sum(n: number): this {
    this.number += n;
    return this;
  }
  subtraction(n: number): this {
    this.number -= n;
    return this;
  }
  divison(n: number): this {
    this.number /= n;
    return this;
  }
}

export class subCalc extends Calc {
  sqrt(n: number): this {
    this.number **= n;
    return this;
  }
}

// com retorno this consigo realizar chamada da classe em cadeia
const cal = new Calc(33);
cal.mult(3).divison(2).subtraction(5).sum(5);
console.log(cal);

//projeto padrãa GOF

export class requests {
  protected method: 'get' | 'post' | null = null;
  protected url: string | null = null;

  //vale observar,não posso colocar | sring,porque string e mais amplo
  // 'get' e 'post'
  setMethod(item: 'get' | 'post'): this {
    this.method = item;
    return this;
  }

  //vale observar que aqui posso colocar 'get' | 'post',porque e mais
  //restrito que string
  getUrl(item: string): this {
    this.url = item;
    return this;
  }

  send(): void {
    console.log(`Enviando atraves do metodo ${this.method} a url:${this.url}`);
  }
}

const request = new requests();
request.setMethod('get').getUrl('http://gooogle.com').send();
