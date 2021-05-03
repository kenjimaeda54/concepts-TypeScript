type Cars = {
  brand: string;
  year: string;
};

//usando essa forma garanto o espelhamento do tipo Cars em cars
type Car = {
  brand: Cars['brand'];
  year: Cars['year'];
  name: string;
};

//se eu alterar alguma chave em type Cars,vai refletir aqui
//ja que é espelhamento entre classes
const userCar: Car = {
  brand: 'Ford',
  year: '22020',
  name: 'Ricardo',
};

console.table(userCar);
