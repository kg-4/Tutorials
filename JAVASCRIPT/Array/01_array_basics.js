// 01_array_basics.js
// Creating, accessing and updating arrays


// 1. Array Creation 
let fruits = ['Apple','Mango','Orange','Banana'];

// 2.Accessing Array Element  
console.log(fruits[0]);  //Apple
console.log(fruits[3]);  //Banana
console.log(fruits[6]); //undefined (index does not exist)

// 3. Updating an Array Element 
fruits[2] = 'Avocado';
console.log(fruits) // [ 'Apple', 'Mango', 'Avocado', 'Banana' ]