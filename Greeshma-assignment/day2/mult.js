var b=document.getElementById("btn");
b.addEventListener('click',handle);

function handle()
{
    var num1=document.getElementById('n1').value;
    var num2=document.getElementById('n2').value;
    alert("the product is "+(parseInt(num1)*parseInt(num2)));
}