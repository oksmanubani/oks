let upper = required('./upper')

// To capitalize...

function displayTotal(name,total){
    //return `${name}, your total is ${total}`

    // To capitalize...
    //return `${capitalize(name)}, your total is ${roundNumber(total)}`

    //now object is in upper/the round number
    return `${upper.capitalize(name)}, your total is ${round.roundNumber(total)}` 

}


console.log(displayTotal('peter', 560.954545454));

//for name to be capitalize litter...

function capitalize(word){
    return word.toUpperCase();

}

//to return numbr to decimal... display in 2 decimal

function roundNumber(number){
    return number.toFixed(2);}