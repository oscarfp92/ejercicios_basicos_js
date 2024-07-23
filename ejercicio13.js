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
};
} else {
  return {
    exists: false,
  };
}
}
console.log (nameFinder(names, 'Logan'))
console.log (nameFinder(names, 'Pedro'))
