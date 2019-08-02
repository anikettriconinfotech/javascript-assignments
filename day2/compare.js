var a = {
  firstName : "Jerry",
  lastName  : "cherry",
  age     : 70,
  
};

var b = {
   firstName : "Jerry",
   lastName : "cherry",
   age : 70,
 
};

function compareObjects(a,b){
    var aProp =Object.getOwnPropertyNames(a);
    var bProp =Object.getOwnPropertyNames(b);

    if(aProp.length !== bProp.length){
            return false;        
    }
    for(var i=0;i< aProp.length;i++){
        var propName = aProp[i];
        if(a[propName] !== b[propName]){
            return false;
        }
    }
    return true;
}

var res = compareObjects(a, b);
console.log(res);