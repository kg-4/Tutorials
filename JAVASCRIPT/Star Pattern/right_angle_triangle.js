// To print a right-angled triangle star pattern

function printTraingle(n){
    for(let i = 0 ; i < n ; i++)
        {
            let line = ""
            for(let j = 0; j <= i ; j++)
            {
                line = line + "* "
            }
            console.log(line);
    }
}
printTraingle(5)