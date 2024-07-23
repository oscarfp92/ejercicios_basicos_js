const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
function averageWord (list) {
  let suma = 0;
  let totalElements = mixedElements.length;
  for (i = 0; i < mixedElements.length; i++) {
    if (typeof mixedElements[i] === "number") {
      suma += mixedElements[i];
    }
    else if (typeof mixedElements[i] === "string") {
      totalElements += mixedElements[i].length;
    }
    }
    let media = (totalElements + suma) / mixedElements.length
    return media
  }
  console.log (averageWord (mixedElements))