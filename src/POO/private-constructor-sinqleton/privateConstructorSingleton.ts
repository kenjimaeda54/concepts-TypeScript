//usamos construtor privado para construir Singleton-Referencia Bibliografica Gang of Four
//Factory Method- Referencia bibliografica Gang of Four
export class Database {
  private static database: Database;
  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  conecet(): string {
    return `Localhost${this.host} Usuario:${this.user} Senha:${this.password}`;
  }

  //Factory Methodo- Quando um metodo de um classe cria um novo objeto
  static checkDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Retornando instancia criada');
      return Database.database;
    }
    console.log('Criando primeira instancia');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

//se o objeto fosse chamado por new (iria criar duas intancias)
const db1 = Database.checkDatabase('Localhost', 'root', '12151468');
console.log(db1);
const db2 = Database.checkDatabase('Localhost', 'root', '12151468');
console.log(db2);
const db3 = Database.checkDatabase('Localhost', 'root', '12151468');
console.log(db3);
const db4 = Database.checkDatabase('Localhost', 'root', '12151468');
console.log(db4);
