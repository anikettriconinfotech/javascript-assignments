var person1 = {
    occupation: "manager",
    salary: "5000"
};

var person2 = {
    occupation: "manager",
    salary: 5000
};



function isEquivalent(per1, per2) {
    
    var per1Props = Object.getOwnPropertyNames(per1);
    var per2Props = Object.getOwnPropertyNames(per2);

   
    if (per1Props.length != per2Props.length) {
        return false;
    }

    for (var i = 0; i < per1Props.length; i++) {
        var propName = per1Props[i];

      
        if (per1[propName] !== per2[propName]) {
            return false;
        }
    }

  
    return true;
}

console.log(isEquivalent(person1, person2));