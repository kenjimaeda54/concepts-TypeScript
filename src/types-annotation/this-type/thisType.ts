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
