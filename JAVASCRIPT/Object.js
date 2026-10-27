const student = {
    name : "Komal",
    age : 21,
    dept : "Computer",
    greet : function(){
        return "Hello, Welcome " + this.name //student.name
    }
}

console.log(typeof student);
console.log( student.name); //dot method
console.log( student['name']); //bracket method

student.city = "Pune";  // dding new key : value
console.log("student name:",student.name, "Student city:",student.city);

student.age = student.age + 1; //
console.log(student);

delete student.city;
console.log(student);

for(k in student){
    console.log(k);
    console.log(student[k])
}
// Can not iterate because their is no indexing
// for(v of student){
//     console.log(v)
// }

console.log(student['name']);


console.log(Object.keys[student]);

console.log(Object.values[student]);

console.log(Object.entries[student]);

console.log(student.greet())

strStudent = JSON.stringify(student);
console.log(strStudent);
console.log(typeof strStudent );

objStudent = JSON.parse(strStudent);
console.log(objStudent);
console.log(typeof objStudent);

fruit = ["Apple","Banana"];
console.log(fruit);
console.log(JSON.stringify(fruit));

student.address = {
    houseNum : 420,
    city : "Pune",
    state : "MH",
    pincode :"44111"
}

console.log(student.address.pincode);

student.subject =["english","marathi","hindi"];
student.subject.map((s)=>console.log(s,"This is my Subject"))