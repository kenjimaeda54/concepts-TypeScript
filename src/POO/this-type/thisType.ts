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

const cal = new Calc(10);
cal.mult(3).divison(2).subtraction(5);
console.log(cal);

export class Request {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  //interesante entender,aqui não posso colocar string,porque string e algo mais amplo que
  //'get','post'.
  setMethod(parms: 'get' | 'post'): this {
    this.method = parms;
    return this;
  }

  //aqui posso colocar 'get' e 'post'.
  getUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviado atraves metodo ${this.method}, url: ${this.url} `);
  }
}
const sends = new Request();
sends.setMethod('get').getUrl('http://parabems.google.com').send();
