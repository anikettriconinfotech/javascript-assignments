var person1={
    name:"saikiran",
    age:21,
    college:"klu"
};
var person2={
    name:"saikiran",
    age:21,
    college:"klu"
};
function isequal(a,b)
{
    var p1keys = Object.getOwnPropertyNames(a);
    var p2keys = Object.getOwnPropertyNames(b);
    console.log(p1keys);
    console.log(p2keys);

if (p1keys.length!=p2keys.length) 
{
    return false;
}
for (var i=0;i<p1keys.length;i++) 
{
    var names=p1keys[i];
    if (a[names]!==b[names]) 
    {
        return false;
    }
}
return true;
}
console.log(isequal(person1,person2));