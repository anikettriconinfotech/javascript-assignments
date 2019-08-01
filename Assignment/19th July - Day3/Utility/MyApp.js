/*Prototypes*/
function Person(name){
    this.name=name;
}

var p1=new Person("Virat");

Person.prototype.getName=function(){
    return this.name;
}

p1.getName=function(){
    return 'Test';
}

var p2=new Person("MSD");

/*Inheritance */
var x=10;
var obj={
    x:20,
    getX(){
        return this.x;
    }
};


var anotherObj={
    x:30
};




/*Playing with JSON-AJAX*/
//Execute getUsers() to write to HTML page.
function getUsers(){
    var url="https://jsonplaceholder.typicode.com/users";

    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState ==4 && this.status == 200){
            updateUserList(JSON.parse(this.responseText));
        }
    };
    xhttp.open("GET",url,true);
    xhttp.send();
}

function updateUserList(response){
    for (var i=0;i <response.length; i++){
        var user = response[i];
        let userElement = document.createElement('div');
        userElement.className = 'user'
        var name = document.createElement('p');
        name.innerHTML = user.name;
        var email = document.createElement('p');
        email.innerHTML = user.email;
        var phone = document.createElement('p');
        phone.innerHTML = user.phone;

        userElement.appendChild(name);
        userElement.appendChild(email);
        userElement.appendChild(phone);

        document.getElementById('user-list').appendChild(userElement);
    }
}

var btn=document.getElementById("myButton");
var btnStop=document.getElementById("myStopButton");
var secondsElapsed=0;

btn.addEventListener('click',function(){
    setInterval(function(){
        secondsElapsed++;
        document.getElementById("time").innerHTML=secondsElapsed;
    },1000);
});

btnStop.addEventListener('click',function(){
    clearInterval();
    document.getElementById("time").innerHTML=secondsElapsed;
});

function getPhotoes(){
    var url="https://jsonplaceholder.typicode.com/photos";

    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState ==4 && this.status == 200){
            updatePhotoesList(JSON.parse(this.responseText));
        }
    };
    xhttp.open("GET",url,true);
    xhttp.send();
}

function updatePhotoesList(response){
    for (var i=0;i <response.length; i++){
        var user = response[i];
        let userElement = document.createElement('div');
        userElement.className = 'user2'
        var name = document.createElement('p');
        name.innerHTML = user.albumId;
        var email = document.createElement('p');
        email.innerHTML = user.id;
        var phone = document.createElement('p');
        phone.innerHTML = user.title;
        
        var yurl = document.createElement('img');
        yurl.setAttribute("src", user.url);
        yurl.setAttribute("width","200");
        yurl.setAttribute("height","150");
        //yurl.innerHTML = user.url;
        //document.getElementById("img").src=user.url;

        var yurl2=document.createElement('img');
        yurl2.setAttribute("src",user.thumbnailUrl);
        yurl2.setAttribute("width","200");
        yurl2.setAttribute("height","150");
        //yurl2.i = user.thumbnailUrl;
        

        userElement.appendChild(name);
        userElement.appendChild(email);
        userElement.appendChild(phone);
        userElement.appendChild(yurl);
        userElement.appendChild(yurl2);

        document.getElementById('user-list').appendChild(userElement);
    }
}


//Using fetch and Promise
function usingFetchAndPromises(){

const fetchPromise = fetch("https://jsonplaceholder.typicode.com/users");
// Target main element
const main = document.getElementById("user-list");
fetchPromise.then(response => {
  return response.json();
}).then(people => {
    const names = people.map(person => person.name).join("\n");
    const email = people.map(person => person.email).join("\n");
    const phone = people.map(person => person.phone).join("\n");
    // Append names to main element
    for (var i=0;i<names.length;i++){
        main.innerHTML = names[i]+"\n"+email[i]+"\n"+phone[i]
        main.innerHTML = "\n\n"
    }
    main.innerHTML = names+email+phone;
});

}