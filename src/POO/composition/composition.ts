//composição são classes que estão diretamentes ligadas
//estou inferindo pelo new a classe Motor dentro da classe Car
export class Car {
  protected readonly motor: Motor = new Motor();

  on(): void {
    this.motor.on();
  }

  speedUp(): void {
    this.motor.sepeedUp();
  }

  stop(): void {
    this.motor.stop();
  }
}

export class Motor {
  on(): void {
    console.log('Motor esta ligando');
  }

  sepeedUp(): void {
    console.log('Motor esta acelerando');
  }

  stop(): void {
    console.log('Motor esta desligando');
  }
}

const user = new Car();

user.on();
user.speedUp();
user.stop();
