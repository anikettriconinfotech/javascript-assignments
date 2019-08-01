
setInterval(() =>{
    var date = new Date();
    var hours = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    if(sec < 10)
        sec = "0"+sec;
    document.getElementById("clock").innerHTML = hours + " : " + min + " : "+sec;
} ,1000);
