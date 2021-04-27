//tipos estruturais e comum em type script,algumas linguaguens tipadas]
//não ocorre esse comportamento

//estou declarando uma constante que vai retornar boolean
type CheckUser = (user:User,setValue:User) => boolean;
type User = {name:string,senha:string};

export const  chekingUser:CheckUser=(user,setValue) =>{

    return  user.name === setValue.name && user.senha ===  setValue.senha;

}
const newUser = {name:"Luiz",senha:"262651"}
const oldUser = {name:"Luiz",senha:"2651"}
const checking = chekingUser(newUser,oldUser)
console.log(checking)




