// 02_array_operations.js
// Adding, removing, finding elements, checking existence, slicing and splicing

let animals = ['Dog','Cat','Rabbit'];

// Adding the element
animals.push('Monkey');
console.log(animals); //[ 'Dog', 'Cat', 'Rabbit', 'Monkey' ]

// Finding the elements
let item = animals.indexOf("Cat");
console.log(item); // Output: 1

//checking for existence
console.log(animals.includes("Rabbit")); //Output: true
console.log(animals.includes('Elephant')); //Output: false

// Slicing 
let sliced = animals.slice(0,2);
console.log(sliced); //[ 'Dog', 'Cat' ]

// Splicing
animals.splice(1,1); //
console.log(animals); //[ 'Dog', 'Rabbit', 'Monkey' ]