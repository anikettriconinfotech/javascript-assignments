function show() {
    setInterval(function(){ var d=new Date();
        document.getElementById("time").innerHTML=(d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()); }, 1000)
        document.getElementById("time").style.display = 'inline';
    }
function hide() {
        document.getElementById("time").style.display = 'none';
    }