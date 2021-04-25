//declarações de funções

function example(...args: string[]):void{
       console.log(args.join(' '));
}

const people ={
    nome:"Ricardo",
    sobrenome:"Maeda",
    sepeak():void{
        console.log(`Eu me chamo ${this.nome} ${this.sobrenome}`)
    }

}

example("Luiz","Ricardo")
people.sepeak();


export  { people }