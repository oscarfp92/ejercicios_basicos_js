const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(list) {
let noDuplicates = []
for (i = 0; i < duplicates.length; i++) {
if (!noDuplicates.includes (duplicates[i])) {
 noDuplicates.push (duplicates[i])}
} return noDuplicates
}
console.log (removeDuplicates(duplicates))