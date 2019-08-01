console.log("hello");
var count = 0;
var min = 0;
var hour = 0;
var timer;
var StartButton = document.getElementById("start");
StartButton.addEventListener('click',function(){
    var StartButton = null;
    document.getElementById("start").disabled = true;
       timer = setInterval( function(){
        if(count == 59)
        {
            count = 0;
            min++;
        }
        if(min == 59)
        {
            min = 0;
            hour++;
        }
        if (hour == 23)
        {
            hour = 0;
        }
        count++;
    
        if(count<10)
        document.getElementById("seconds").innerHTML =  "0"+count;
        else 
        document.getElementById("seconds").innerHTML =  count;
        if(min<10)
        document.getElementById("min").innerHTML =  "0"+min;
        else 
        document.getElementById("min").innerHTML =  min;
        if(hour<10)
        document.getElementById("hours").innerHTML =  "0"+hour;
        else 
        document.getElementById("hours").innerHTML =  hour;
        
    }  ,1000 )
    
})
var StopButton = document.getElementById("stop");
StopButton.addEventListener('click',function(){
    StartButton = document.getElementById("start");
    document.getElementById("start").disabled = false;
  
    
 clearInterval(timer);   
})