
function checkEqualObjects(x,y){
  
    var flag=0;
    
    for(key in x){
        if(x[key]!=y[key]){
            flag=1;
            break;
        }
        else{
            flag=0;
        }
    
    }
    if (flag==0){
        console.log("True:Same");
    }
    else{
        console.log("False:Not Same");
    }

}

