function sumValues(){
    var n1,n2,res;
    n1=Number(document.formcalc.textnum1.value);
    n2=Number(document.formcalc.textnum2.value);
    res=n1+n2;
    document.formcalc.txtres.value=res;
}
function minValues(){
    var n1,n2,res;
    n1=Number(document.formcalc.textnum1.value);
    n2=Number(document.formcalc.textnum2.value);
    res=n1-n2;
    document.formcalc.txtres.value=res;
}
function mulValues(){
    var n1,n2,res;
    n1=Number(document.formcalc.textnum1.value);
    n2=Number(document.formcalc.textnum2.value);
    res=n1*n2;
    document.formcalc.txtres.value=res;
}
function divValues(){
    var n1,n2,res;
    n1=Number(document.formcalc.textnum1.value);
    n2=Number(document.formcalc.textnum2.value);
    res=n1/n2;
    document.formcalc.txtres.value=res;
}