function calc(clicked_id)
{
    var first = parseFloat(document.getElementById("first").value);
    var second = parseFloat(document.getElementById("second").value);

    if(clicked_id=="add")
        document.getElementById("ans").value = first+second;
    else if(clicked_id=="sub")
        document.getElementById("ans").value = first-second;
    else if(clicked_id=="mul")
        document.getElementById("ans").value = first*second;
    else if(clicked_id=="div")
        document.getElementById("ans").value = first/second;
}