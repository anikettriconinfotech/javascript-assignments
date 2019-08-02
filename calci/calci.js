function isEmpty(num1,num2) {
  if (num1== '' || num2 == '') {
    return true;
  } else {
    return false;
  }
}
function mult() {
 var num1=document.getElementById("num1").value;
 var num2=document.getElementById("num2").value;
 var ans;
 if (isEmpty(num1,num2)) {
    document.getElementById("output").innerHTML='Error: one or both inputs are empty.';
    return;
  }
  else{
    ans = Number(num1) * Number(num2);
    document.getElementById("output").innerHTML=num1 +'   ' + '*' + '  ' +   num2 + ' = ' + '  ' + ans;
    return;
  }
}
function divide() {
  var num1=document.getElementById("num1").value;
  var num2=document.getElementById("num2").value;
  var ans;
  if (isEmpty(num1,num2)) {
     document.getElementById("output").innerHTML='Error: one or both inputs are empty.';
    return;
  }
  else{
    ans = Number(num1) / Number(num2);
    document.getElementById("output").innerHTML=num1 +'   ' + '/' + '  ' +   num2 + ' = ' + '  ' + ans;
    return;
  }
}
function sum() {
  var num1=document.getElementById("num1").value;
  var num2=document.getElementById("num2").value;
  var ans;
  if (isEmpty(num1,num2)) {
     document.getElementById("output").innerHTML='Error: one or both inputs are empty.';
    return;
  }
  else{
    ans = Number(num1) + Number(num2);
    document.getElementById("output").innerHTML=num1 +'   ' + '+' + '  ' +   num2 + ' = ' + '  ' + ans;
    return;
  }
}
function sub() {
  var num1=document.getElementById("num1").value;
  var num2=document.getElementById("num2").value;
  var ans;
  if (isEmpty(num1,num2)) {
     document.getElementById("output").innerHTML='Error: one or both inputs are empty.';
    return;
  }
  else{
    ans = Number(num1) - Number(num2);
    document.getElementById("output").innerHTML=num1 +'   ' + '-' + '  ' +   num2 + ' = ' + '  ' + ans;
    return;
  }
}