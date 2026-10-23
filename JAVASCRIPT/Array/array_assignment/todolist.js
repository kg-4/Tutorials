let tasks = []
const taskInuputElmt = document.getElementById("inputTask")
const renderTaskElmt = document.getElementById("renderTasks")
const clearAllElmnt = document.getElementById("ClearAllTasks")

function renderTasks(){
    renderTaskElmt.innerHTML = tasks.map((task,i)=>`
        <li>${task}
        <button onclick="deleteTask(${i})">DELETE</button>
        </li>
        `).join('')
}

function addNewTask(){
    newTask = taskInuputElmt.value
    tasks.push(newTask)
    renderTasks()
}

function deleteTask(index){
    tasks.splice(index,1)
    console.log(tasks)
    renderTasks()
}

clearAllElmnt.addEventListener('click',()=>{
    tasks = []
    renderTasks()
})

//------------------2.Student Marks Calculator---------------------

let marks = []
const inputMarksElmt = document.getElementById("inputMarks")
const marksRenderElmt = document.getElementById("marksRender")
const resetMarksElmt = document.getElementById("resetMarks")

function addMarks(){
    let mark = Number(inputMarksElmt.value)
    marks.push(mark)
    console.log(marks)
}


function calculate()
{
    let totalMarks = 0
    for(let i = 0; i < marks.length; i++){
        totalMarks += marks[i]
    }

    let avgMarks = totalMarks / marks.length

    let highestmarks = marks[0]
    for(let i = 0 ;i<marks.length;i++){
         if (marks[i] > highestmarks){
            highestmarks = marks[i];
        }
    }

    let lowestMarks = marks[0]
    for(let i = 0 ;i<marks.length;i++){
         if (marks[i] < lowestMarks) {
            lowestMarks = marks[i];
    }

    marksRenderElmt.innerHTML = `
    <p>Total Marks : ${totalMarks}</p>
    <p>Average Marks : ${avgMarks}</p>
    <p>Highest Marks :${highestmarks} </p>
    <p>Lowest Marks : ${lowestMarks} </p>
    `

    }
 }

//  marksRenderElmt.addEventListener('click',()=>{
//     marks = []
   
// })


//-------------------3. Search in an Array-------------------------

let company_names = ['Google','Amazon','TCS','Infosys','Wipro','Infotech','Bajaj','Microsoft']
const inputNameElmt = document.getElementById("inputName")
const nameRenderElmt = document.getElementById("nameRender")

function search(){
    let searchName = inputNameElmt.value;
    if(company_names.includes(searchName)){
        let index = company_names.indexOf(searchName)
        console.log(company_names[index])
        console.log(company_names.value)
        nameRenderElmt.innerHTML = searchName
    }
    else{
        
        nameRenderElmt.innerHTML = "No matches found!!"
    }
}


//---------------------- 4. Filter Even and Odd Numbers ---------------------------
let number = []

const inputnumberElmt = document.getElementById('inputnumber')
const evenRenderNumberElmt = document.getElementById('evenRenderNumber')
const oddRenderNumberElmt = document.getElementById('oddRenderNumber')

function addNumber() {
    let newNumber = Number(inputnumberElmt.value)
    number.push(newNumber)
    console.log(number)
}

function showEven() {
    evenRenderNumberElmt.innerHTML = ""
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 == 0) {
            evenRenderNumberElmt.innerHTML +=
                `<p>Even Number: ${number[i]}</p>`
        }
    }
}

function showOdd() {
    oddRenderNumberElmt.innerHTML = ""
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 != 0) {
            oddRenderNumberElmt.innerHTML +=
                `<p>Odd Number: ${number[i]}</p>`
        }
    }
}

// ------------------------ 5. Sort Names Alphabetically ----------------------

let std_names =[]

const inputnamesElmt = document.getElementById("inputnames")
const sortedRenderNamesElmt = document.getElementById("sortedRenderNames")


function addNames(){
    let  newName = inputnamesElmt.value;
    std_names.push(newName)
    console.log(std_names)
    inputnamesElmt.value = ""
}

function sortNames() {
    std_names.sort();

    sortedRenderNamesElmt.innerHTML = std_names;
}





