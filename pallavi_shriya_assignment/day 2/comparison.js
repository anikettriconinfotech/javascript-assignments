var ob1 = {
firstName : "Pallavi",
lastName : "Shriya",
age : 30,
};

var ob2= {
firstName : "Arati",
lastName : "Shah",
age : 50,
};

function compareObjects(ob1,ob2){
var prop1 =Object.getOwnPropertyNames(ob1);
var prop2 =Object.getOwnPropertyNames(ob2);

if(prop1.length !== prop2.length){
return false;
}
for(var i=0;i< prop1.length;i++){
var Name = Prop1[i];
if(ob1[Name] !== ob2[Name]){
return false;
}
}
return true;
}

var result = compareObjects(ob1, ob2);
console.log(result);
