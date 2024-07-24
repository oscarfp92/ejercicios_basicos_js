/*Usa un for para reemplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente imprime el array resultante.*/

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let fruitIndex = 0;
for (i = 0; i < foodSchedule.length; i++) {
  if (foodSchedule[i].isVegan === false) {
    if (fruitIndex < fruits.length) {
      foodSchedule[i].name = fruits[fruitIndex];
      fruitIndex++;
    }
  }
}
console.log (foodSchedule[i].name);