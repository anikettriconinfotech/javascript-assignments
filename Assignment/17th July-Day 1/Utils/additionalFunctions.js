function answer(x,y,operand){
    if(operand=='+'){
        return x+y;
    }
    else if(operand=='-'){
        return x-y;
    }
    else if(operand=='*'){
        return x*y;
    }
    else if(operand=='/'){
        return x/y;
    }
    else{
        alert("Please Enter Correct Operand to perform operation.")
    }

}
