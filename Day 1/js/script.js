var name = "Shubham Rai";
var age = 23;
var x = name;
console.log(age,name);
console.log(x);

var person={
            name:"Shubham rai",
            age:20,
            ismarried: false
          }
person.height = 6.5;
console.log(person.height);
person.friend=['tom','jerry','micky'];

for (var i = 0;i < person.friend.length; i++)
{
    console.log("welcome" + " "+  person.friend[i]);
}

var age = 20
var category= null;

if (age >=0 && age <= 5)
{
    category="baby"
}

else if (age >= 5)
{
    category="child"
}

else if (age >= 19)
{
    category="boy"
}

console.log(category)

ag1 = 26
ag2 = 20

cat1 = getCategory(ag1)
cat2 = getCategory(ag2)
console.log(category1)
console.log(category2)

function getCategory( age){


            if (age >=0 && age <= 5)
            {
                category="baby"
            }
            
             if (age >= 5)
            {
                category="child"
            }
            
            if (age >= 19)
            {
                category="boy"
            }
            
            else{
                category="man"
            }
            console.log(category)
            

        }