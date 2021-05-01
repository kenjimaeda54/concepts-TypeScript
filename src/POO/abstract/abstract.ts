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

  atacker(character: Character): void {
    this.nameAtack();
    return character.defend(this.atack);
  }

  defend(atack: number): void {
    this.life -= atack;
    return console.log(`${this.name} esta agora com ${this.life}`);
  }
}

export class Warrior extends Character {
  protected emoji = `\u{1F9DD}`;
  nameAtack(): void {
    console.log(`${this.emoji}  Warrior ataca`);
  }
}

export class Moster extends Character {
  protected emoji = `\u{1F9DF}`;
  nameAtack(): void {
    console.log(`${this.emoji} Moster ataca`);
  }
}

const warrior = new Warrior('Gladiador', 1200, 250);
const moster = new Moster('Gorillaz', 1500, 350);

warrior.atacker(moster);
warrior.atacker(moster);
warrior.atacker(moster);
moster.atacker(warrior);
moster.atacker(warrior);
moster.atacker(warrior);
