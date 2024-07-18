const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
function averageWord(list){
  let totalSum = 0;
  let totalElements = list.length;

  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "number") {
      totalSum += list[i];}
      else if (typeof list[i] === "string") {
        totalSum +=list[i].length;
      }
    }return totalSum/totalElements
  }

const result = averageWord (mixedElements)
console.log (result)