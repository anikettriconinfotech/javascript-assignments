var rahul = {
    fullName : "Rahul Tiwari",
    age : 23,
    hobby : "cricket"
};
var rohan = {
    fullName : "Rohan Tiwari",
    age : 25,
    hobby : "cricket",
    interest : "ygfekf"
};
function isEquivalent(first, second) {
    var p1 = Object.getOwnPropertyNames(first);
    var p2 = Object.getOwnPropertyNames(second);

    if (p1.length != p2.length) {
        return false;
    }

    for (var i = 0; i < p1.length; i++) {
        var a = p1[i];

        if (first[a] !== second[a]) {
            return false;
        }
    }

    return true;
}

console.log(isEquivalent(rahul,rohan));