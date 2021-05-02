export class Carr {
  protected readonly motor: Motor = new Motor();

  on(): void {
    this.motor.on();
  }

  seepUp(): void {
    this.motor.speedUp();
  }

  stop(): void {
    this.motor.stop();
  }
}

export class Motor {
  on(): void {
    console.log('Motor esta ligando...');
  }

  speedUp(): void {
    console.log('Motor esta acelerando...');
  }

  stop(): void {
    console.log('Esta parando');
  }
}

const user = new Carr();

user.on();
user.seepUp();
user.stop();
