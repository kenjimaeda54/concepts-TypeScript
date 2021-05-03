export class calc {
  constructor(protected number: number) {}

  sum(n: number): this {
    this.number += n;
    return this;
  }

  sub(n: number): this {
    this.number -= n;
    return this;
  }

  multi(n: number): this {
    this.number *= n;
    return this;
  }

  division(n: number): this {
    this.number /= n;
    return this;
  }
}

export class subCalc extends calc {
  sqrt(n: number): this {
    this.number **= n;
    return this;
  }
}

const match = new calc(35);
match.multi(10).division(10).sum(10).sub(5);
console.log(match);

export class request {
  protected method: 'get' | 'post' | null = null;
  protected url: string | null = null;

  //interesante entender,aqui não posso colocar string,porque string e algo mais amplo que
  //'get','post'
  setMethod(requests: 'get' | 'post'): this {
    this.method = requests;
    return this;
  }
  //aqui posso  colocar 'get','post',porque são mais restritos que string
  getUrl(requests: string): this {
    this.url = requests;
    return this;
  }

  send(): void {
    console.log(`Enviando pelo meotodo ${this.method} pela url:${this.url}`);
  }
}
const requests = new request();
requests.setMethod('get').getUrl('http://google.com').send();
