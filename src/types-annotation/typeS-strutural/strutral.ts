//tipos estruturais e comum em type script,algumas linguaguens tipadas]
//não ocorre esse comportamento

//estou declarando uma uma função,recordando quando crio minha propria
//variavel trabalho com maisculo
type CheckUser = (user: User, setValue: User) => boolean;
type User = { name: string; password: string };

//arroww function
export const checkingUser: CheckUser = (user, setValue) => {
  return user.name == setValue.name && user.password == setValue.password;
};
const newUser = { name: 'Luiz', password: '1211212' };
const oldUser = { name: 'Luiz', password: '1211212' };
const checking = checkingUser(newUser, oldUser);
console.log(checking);
