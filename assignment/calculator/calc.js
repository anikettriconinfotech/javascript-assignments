function add()
{
    var num1 = document.getElementById('number1').value;
    var num2 = document.getElementById('number2').value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    document.getElementById('showResult').innerHTML = num1+num2;
}
function sub()
{
    var num1 = document.getElementById('number1').value;
    var num2 = document.getElementById('number2').value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    document.getElementById('showResult').innerHTML = num1-num2;
}
function mul()
{
    var num1 = document.getElementById('number1').value;
    var num2 = document.getElementById('number2').value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    document.getElementById('showResult').innerHTML = num1*num2;
}
function div()
{
    var num1 = document.getElementById('number1').value;
    var num2 = document.getElementById('number2').value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    document.getElementById('showResult').innerHTML = num1/num2;
}