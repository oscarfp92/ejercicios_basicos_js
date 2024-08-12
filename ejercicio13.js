/*Crea una función que reciba por parámetro un array y el valor que desea comprobar que exista dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.*/

const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function nameFinder(nameList, nameFind) {
const position = names.indexOf(nameFind);
if (position !== -1) {
return {
  exists: true,
  position: position
}
} else {
  return {
    exists: false
  }
}
}

console.log (nameFinder(names, 'Logan'));
console.log (nameFinder(names, 'Pedro'));
