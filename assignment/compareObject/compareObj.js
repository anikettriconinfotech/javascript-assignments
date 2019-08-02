var object1 = {
    name : 'Tom',
    number1 : 12,
    
};

var object2 = {
    name : 'Jerry',
    number1 : 12,
};

var object3 = {
    name : 'Tom',
    number1 : 12,
};



function isEquivalent(a, b) {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    
    return true;
}


console.log(isEquivalent(object1, object2));
console.log(isEquivalent(object2, object3));
console.log(isEquivalent(object1, object3));