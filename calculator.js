function add(num1,num2)
{
    return num1+num2;
}

function sub(num1,num2)
{
    return num1-num2;
}

function mul(num1,num2)
{
    return num1*num2;
}

function div(num1,num2)
{
    if(num2==0)
    {
        return ("zero cant be used to divide");
    }
    else  return num1/num2;
}

var num1 = 23;
var num2 = 0;

console.log ('result after addition ' +  add(num1,num2));
console.log ('result after subtraction ' + sub(num1,num2));
console.log ('result after multiply ' +  mul(num1,num2));
console.log ('result after divide ' +  div(num1,num2));