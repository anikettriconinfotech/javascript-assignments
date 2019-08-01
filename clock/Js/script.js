
$(document).ready(function(){
     function startTime(){
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        document.getElementById('box').innerHTML = h + ":" + m + ":" + s;
        console.log(h);
     }
       
         setInterval(startTime, 1000);
      
});