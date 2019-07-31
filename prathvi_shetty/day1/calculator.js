var num1 = 12 ;
var num2 = 15 ;
var result = 0 ;
var operation = "/" ;
var answer ;

function add(a , b)
{
    result = a + b ;
    console.log("Answer is : "+ result);
}

function subtract(a , b)
{
    result = a - b ;
    console.log("Answer is : "+ result); 
}

function multiply(a , b)
{
    result = a * b ;
    console.log("Answer is : "+ result);
}

function division(a , b)
{
    result = a / b ;
    console.log("Answer is : "+ result);
}

if (operation == "+")
{
     add(num1 , num2);
}
else if (operation == "-")
{
     subtract(num1 , num2);
}
else if (operation == "*")
{
     multiply(num1 , num2);
}
else if (operation == "/")
{
     division(num1 , num2);
}
else
{
    console.log("Invalid operation");
}
