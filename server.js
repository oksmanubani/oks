import { roundNumber } from "./round";
import { capitalize, lowerCase } from "./upper";

function printTotal(name, amount){
    return`${capitalize(name)}, your total amount is ${amount}`
}

console.log(printTotal('james', 56.575756575757))


//var http = require('http');

//var server = http.creatServer(funtion(request, response){

//})


//server.listen(3000)