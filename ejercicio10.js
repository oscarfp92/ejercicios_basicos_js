const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  let result=0
  for(let i = 0; i < numberList.length; i++){
  result += numberList[i]
  };
  const media = result / numberList.length;
  return media;
}
console.log (average(numbers))
