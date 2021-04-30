export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  getDatabse(): string {
    return `Localhost${this.host} User:${this.user}  Senh:${this.password}`;
  }

  static getNewDatabase(
    host: string,
    user: string,
    password: string,
  ): Database {
    if (Database.database) {
      console.log('Retornando conexao instanciada');
      return Database.database;
    }
    console.log('Criando primeira instancia');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getNewDatabase('Localhost', 'root', '1261545');
db1.getDatabse();
console.log(db1);
const db2 = Database.getNewDatabase('Localhost', 'root', '126215');
db2.getDatabse();
console.log(db2);
const db3 = Database.getNewDatabase('Localhost', 'root', '126215');
db3.getDatabse();
console.log(db3);
const db4 = Database.getNewDatabase('Localhost', 'root', '126215');
db4.getDatabse();
console.log(db4);
