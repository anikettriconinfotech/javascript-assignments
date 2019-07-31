var startButton = document.querySelector('#start');
var stopButton = document.querySelector('#stop');

startButton.addEventListener('click', startClock);
stopButton.addEventListener('click' , stopClock);

function startClock(){
    var day = new Date();
    var hours = day.getHours();
    var minutes = day.getMinutes();
    document.querySelector('#hours').innerHTML = hours + " : ";
    document.querySelector('#minutes').innerHTML = minutes;
    timer = setTimeout(startClock, 1000);
}

function stopClock(){
    document.querySelector('#hours').innerHTML = "00 :  ";
    document.querySelector('#minutes').innerHTML = "00";
    clearTimeout(timer);
   
}
