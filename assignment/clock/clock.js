var t;
function getTime()
{
    var today = new Date();
    var h = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById('txt').innerHTML = h + ":" + min +":"+sec;
  t = setTimeout(getTime,500);
}
 
function checkTime(i)
{
    if(i<10) 
    {
        i = "0" +i;
    }
    return i ;
}
function stopTime()
{
    clearInterval(t);
}