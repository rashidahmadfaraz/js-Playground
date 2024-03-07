//NOTE - i declared Const(keyword) num1(variable) is equal to Number 10
const pi = 3.14
// pi=10
console.log (pi)
//NOTE - the keyword let allow to given variable to change later on, num2 is the variable being assigned the value of 20
let num2 = 20
num2 = 25
num2=35
console.log (num2)
//NOTE - 
var num3= 30
console.log (num3) 
console.log (pi+num2)
console.log (num3*num2)

const fullName = 'Rashid Ahmad Faraz'
console.log(fullName)

const workPlace = 'NMIT'
console.log(workPlace)
console.log(fullName + " " + workPlace)
console.log(`My full name is ${fullName} and I work at ${workPlace}`)
const working = true
const notWorking = false

if (working) {
    console.log(fullName)
} 
if(pi == 3.14){
    console.log(fullName)
}

let a = 2
let result 
//if () {} else {}
a=0
if (a >= 0){
    result = "Positive";
    console.log(result)
} else {
    result = "NOT positive";
    console.log(result)
}