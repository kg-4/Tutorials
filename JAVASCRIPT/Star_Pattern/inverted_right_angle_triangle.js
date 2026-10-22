// To print a Inverted right-angled triangle star pattern

function printInvertedTriangle(n){
    for(let i = n ; i > 0 ; i--){
        let line = ""
        for(let j = 0 ; j < i ;j++){
            line = line + "* "
        }
        console.log(line)
    }
}
printInvertedTriangle(5)
