function calci(check_id){
    var First = parseInt(document.getElementById('FirstNumber').value);
    var Second = parseInt(document.getElementById('SecondNumber').value);
    if (check_id=='Addtion'){
        document.getElementById("Answer").innerHTML ='Addition is  '+ (First+Second)
    }
    else if(check_id=='Subtraction'){
        document.getElementById("Answer").innerHTML ='subtractiontion is  '+ (First-Second)
    }
    else if(check_id=='Multiplication'){
        document.getElementById("Answer").innerHTML ='Multiplication is  '+ (First*Second)
    }
    else if(check_id=='Division'){
        document.getElementById("Answer").innerHTML ='Division is  '+ (First/Second)
    }
}