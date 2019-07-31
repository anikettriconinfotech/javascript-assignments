function displayTime(){
    var now = new Date();
    var hours = now.getHours();
    var mins = now.getMinutes();
    var secs = now.getSeconds();
    var suffix = "AM"

    if(hours == 0){
        hours = 12;
    }

    if(hours > 12){
        hours = hours - 12;
        suffix = "PM";
    }

    var time = hours+ " : " +mins+ " : " +secs+ " " +suffix;
    document.getElementById("print").innerHTML = time;
    setTimeout(displayTime, 1000);
}

displayTime();