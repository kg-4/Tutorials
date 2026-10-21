// To print a square star pattern

function printSquare(n){
    for(let i = 0; i < n ;i++){
        let line = ""
        for(let j = 0; j < n;j++){
            line = line + "* "
        }
        console.log(line);
    }
}
printSquare(5);