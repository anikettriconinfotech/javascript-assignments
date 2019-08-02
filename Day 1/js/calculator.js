function add(num1,num2)
{
    var sum = num1+num2
    console.log(sum)
}

function subtract(num1,num2)
{
    if (num1>num2)
    {
        var value = num1-num2
        console.log(value)
    }
    else
    {
        var value = num2-num1
        console.log(value)
    }

}

function multiply(num1,num2)
{
    var value = num1*num2 
    console.log(value)   
}

function divide(num1,num2)
{       
        var value = num1/num2
        console.log(value) 

        if(num1==0 && num2==0)
        {
            console.log("Undefiend")
        }
}

add(58,35)
divide(58,2)