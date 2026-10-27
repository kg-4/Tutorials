// 03 - Array Iteration

// Using for Loop

let num = [1,2,3,4,5];
for(let i = 0; i<num.length; i++){
    console.log(num[i]);  //Ouput : 1 2 3 4 5
}

// Using for...of Loop

let fruits = ['apple','mango','guava','lemon'];
for(let fruit of fruits){
    console.log(fruit); //Output : apple mango guava lemon
}