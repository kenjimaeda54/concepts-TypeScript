//classes abstrata não pode ser instanciada pelo new
//mas ela cria um tipo é pode ser estendida
//toda suas classes ou metodos transformam em sub classes
export abstract class Character {
  protected abstract emoji: string;
  constructor(
    protected name: string,
    protected life: number,
    protected atack: number,
  ) {}

  //metodos ou classes  abstrata não precisa de valores;
  abstract nameAtack(): void;

  atacker(personagem: Character): void {
    this.nameAtack();
    personagem.defend(this.atack);
  }

  defend(power: number): void {
    this.life -= power;
    console.log(`${this.name} agora tem ${this.life} de vida....`);
  }
}

export class Warrior extends Character {
  protected emoji = `\u{1F9DD}`; //emoji Uni code
  nameAtack(): void {
    console.log(`${this.emoji}  Aooo ataque`);
  }
}

export class Moster extends Character {
  protected emoji = `\u{1F9DF}`;
  nameAtack(): void {
    console.log(`${this.emoji} Arrrrrr`);
  }
}

const warrior = new Warrior('Gladiador', 1000, 520);
const moster = new Moster('Gorilaz', 1200, 250);
warrior.atacker(moster);
warrior.atacker(moster);
moster.atacker(warrior);
moster.atacker(warrior);
