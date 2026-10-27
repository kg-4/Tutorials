// 04 - Array Methods
// Methods - push(), pop(), shift(), unshift(), indexOf(), includes() , find(), some(), every(), map(), filter(), reduce(), sort(),concat()


let std_names = ['John','Bob','Jerray','Tom'];
console.log(std_names); //Output : [ 'John', 'Bob', 'Jerray', 'Tom' ]

std_names.push("Jack");
console.log(std_names);  // Output : [ 'John', 'Bob', 'Jerray', 'Tom', 'Jack' ]

std_names.pop();
console.log(std_names);  // Output : [ 'John', 'Bob', 'Jerray', 'Tom' ]

std_names.unshift("Joseb");
console.log(std_names);  // Output : [ 'Joseb', 'John', 'Bob', 'Jerray', 'Tom' ]

std_names.shift();
console.log(std_names);  // Ouput : [ 'John', 'Bob', 'Jerray', 'Tom' ]

let index = std_names.indexOf("Bob");
console.log(index);   // Output : 1

console.log(std_names.includes("Tom"));  // Output : true

let find_result = std_names.find(function(name){
    return name.length > 4 ;
})
console.log(find_result); // Output : Jerray


let some_result = std_names.some(function(name) {
    return name === 'Bob';
});
console.log(some_result); // Output : true


let every_result = std_names.every(function(name) {
    return name.length > 2;
});
console.log(every_result); // Output :true

let map_result = std_names.map(function(name){
    return name.toUpperCase();
})
console.log(map_result);    // [ 'JOHN', 'BOB', 'JERRAY', 'TOM' ]

let filter_result = std_names.filter(function(name) {
    return name.length > 3;
});
console.log(filter_result); // [ 'John', 'Jerray' ]

let num= [10, 20, 30, 40];
let reduce_result = num.reduce(function(total, n) {
    return total + n;
}, 0);
console.log(reduce_result); // Output: 100


let numbers = [40, 10, 30, 20];
console.log(numbers);   // [ 40, 10, 30, 20 ]
numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers);   // [ 10, 20, 30, 40 ]

let boys = ['John', 'Bob'];
let girls = ['Priya', 'Riya'];
let result = boys.concat(girls);
console.log(boys);  // [ 'John', 'Bob' ]
console.log(girls);  // [ 'Priya', 'Riya' ]
console.log(result); // [ 'John', 'Bob', 'Priya', 'Riya' ]