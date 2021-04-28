export class Company{
    public readonly name:string;
    private readonly collaborator: Collaborator []=[];
    protected readonly cnpj: string;

   constructor(name:string,cnpj:string){
       this.name = name;
       this.cnpj = cnpj;
   }

   //metodo para acessar mey array Collaborator
   addCollaborator(collaborator:Collaborator):void{
       this.collaborator.push(collaborator);

   }
   showCollaborator(){
     this.collaborator.forEach(item=>console.table(item))
   }
}


//forma reduzida de criar uma classe
export class Collaborator{
    constructor(
     public readonly  name:string,
     public readonly   secondName:string,

       ){}
}

const company1 = new Company("Udemy","51515151");
const company2 = new Company("Copobras","151515");
const newCollaborator1 = new Collaborator("Beatriz","Vivas");
const newCollaborator2 = new Collaborator("Ricardo","Maeda");
company1.addCollaborator(newCollaborator1);
company2.addCollaborator(newCollaborator2);
company1.showCollaborator();
company2.showCollaborator();
console.log(company1);
console.log(company2);


