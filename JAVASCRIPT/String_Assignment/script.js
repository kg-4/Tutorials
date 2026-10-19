 
//  To count the vowels
 function countVowel() {
    
    inputParagraph = document.getElementById("inputPara").value
    
    console.log(typeof inputParagraph)
    
    let vowel = "aeiouAEIOU";
    let len = inputParagraph.length;
    let count=0;
    for (let i = 0; i <len; i++) {
        if (vowel.includes(inputParagraph.charAt(i))) {
            count++;
        }
    }
document.getElementById("result").textContent = `Vowels in given paragraph: ${count}`
}

// To count Consonents
function countConsonents(){
    inputParagraph = document.getElementById("inputPara").value

    console.log(typeof inputParagraph)

    let consonents = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    let len = inputParagraph.length;
    let count = 0;
    for(let i =0 ;i<len;i++){
        if(consonents.includes(inputParagraph.charAt(i))){
            count++
        }
    }
    document.getElementById("result").textContent = `Consonents in given paragraph: ${count}`
}

// To check the palindrome
function checkPalindrome(){

    inputParagraph = document.getElementById("inputPara").value
    console.log(typeof inputParagraph)

    reverse = ""
    len = inputParagraph.length

    for(let i = len; i>=0 ;i--){
        reverse += inputParagraph.charAt(i)
    }
    if(inputParagraph === reverse){
        document.getElementById("result").textContent ="String is Palindrome"
    }else{
        document.getElementById("result").textContent ="String is not Palindrome"
    }
}

// COUNT LINE

function countLine(){
    let inputParagraph = document.getElementById("inputPara").value;
    console.log(typeof inputParagraph);

    let lines = inputParagraph.split("\n");

    document.getElementById("result").textContent = "Total Lines:" +lines.length;


}

// COUNT SPACE

function countSpace() {
    let inputParagraph = document.getElementById("inputPara").value;

    let space = inputParagraph.split(" ");

    document.getElementById("result").textContent = "Total Space: " + (space.length - 1);
}

/* 

function countSpace() {
    let inputParagraph = document.getElementById("inputPara").value;
    let count = 0;

    for (let i = 0; i < inputParagraph.length; i++) {
        if (inputParagraph[i] == " ") {
            count++;
        }
    }

    document.getElementById("result").textContent = `Total Space: ${count}`;
}

*/

// LOWER CASE

function toLowerCase() {
    let inputParagraph = document.getElementById("inputPara").value;
    console.log(typeof inputParagraph)

    let lower = "";
    let len = inputParagraph.length;

    for (let i = 0; i < len; i++) {
        lower += inputParagraph.charAt(i).toLowerCase();
    }

    document.getElementById("result").textContent = `${lower}`;
}


// UPPER CASE
function toUpperCase() {
    let inputParagraph = document.getElementById("inputPara").value;
    console.log(typeof inputParagraph)

    let upper = "";
    let len = inputParagraph.length;

    for (let i = 0; i < len; i++) {
        upper += inputParagraph.charAt(i).toUpperCase();
    }

    document.getElementById("result").textContent = `${upper}`;
}

// CAMEL CASE

function toCamelCase() {
    let inputParagraph = document.getElementById("inputPara").value;

    let words = inputParagraph.toLowerCase().split(" ");
    let camel = "";

    for (let i = 0; i < words.length; i++) {
        if (i == 0) {
            camel += words[i];
        } else {
            camel += words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
    }

    document.getElementById("result").textContent = `${camel}`;
}
