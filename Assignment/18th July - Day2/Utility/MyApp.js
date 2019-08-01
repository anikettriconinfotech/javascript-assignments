//alert("Hello");

function runThis(){
    var a=document.getElementById("txt1").value;
    var b=document.getElementById("txt2").value;

    console.log(parseInt(a)+parseInt(b));
}

var person1={
    name:"Shashank",
    Gender:"Male"
}

var person2={
    name:"Shubham",
    Gender:"Male"
}

var person3={
    name:"Shubham",
    Gender:"Male"
}

console.log(person2==person3);

checkEqualObjects(person2,person3);

