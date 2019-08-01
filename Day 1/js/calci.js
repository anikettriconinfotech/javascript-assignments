var num1=15;
var num2=12;

function add(num1,num2){
    return num1+num2;
}

function sub(num1,num2){
    return num1-num2;
}

function mul(num1,num2){
    return num1*num2;
}

function div(num1,num2){
    return num1/num2;
}

console.log("Addition of "+ num1 + " and "+ num2 +" is =  "+add(num1,num2));
console.log("Substraction of "+ num1 + " and "+ num2 +" is =  "+sub(num1,num2));
console.log("Multiplication of "+ num1 + " and "+ num2 +" is =  "+mul(num1,num2));
console.log("Division of "+ num1 + " and "+ num2 +" is =  "+div(num1,num2));