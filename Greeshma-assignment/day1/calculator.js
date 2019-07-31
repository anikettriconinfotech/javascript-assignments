var n1 = 10;
var n2 = 5;
var sum = add(n1,n2);
var dif = sub(n1,n2);
var pro = mul(n1,n2);
var quo = div(n1,n2);
function add(n1,n2)
{
    return n1+n2;
}
function sub(n1,n2)
{
    return n1-n2;
}
function mul(n1,n2)
{
    return n1*n2;
}
function div(n1,n2)
{
    if (n2 != 0)
    {
        return n1/n2;
    }
    else{
        console.log("divide by zero error");
    }
}
console.log("sum = "+sum);
console.log("difference = "+dif);
console.log("product = "+pro);
console.log("quotient = "+quo);