let val,h,m,s,result;
function start(){
     val = new Date();
     h = val.getHours();
     m = val.getMinutes();
     s = val.getSeconds();
    clock();
}
function clock(){
    s++;
    if(s==60){
        s=0;
        m++;
        if(m==60){
            m==0;
            h++;
            if(h==24){
                h=0;
            }
        }
    }
    m= $(m);
    s= $(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    result =setTimeout(start, 500);
}

function $(i){
    if(i < 10){
        i= "0" + i
    };
    return i;
}
function stop()
{
    clearInterval(result);
};