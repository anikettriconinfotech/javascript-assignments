var obj1 = {
    name: "tom",
    eid: 123
};

var obj2 = {
    name: "tom",
    eid: 123
};

var res = compareObjects(obj1,obj2)
console.log(res)
function compareObjects(obj1 , obj2){
    var valobj1 = Object.values(obj1);
    var valobj2 = Object.values(obj2);

    if(valobj1.length==valobj2.length){
        for(var i=0; i < valobj1.length; i++){
            if(valobj1[i]!=valobj2[i]){
                return false;
            }
        }
        return true;
    }
    return false;
}