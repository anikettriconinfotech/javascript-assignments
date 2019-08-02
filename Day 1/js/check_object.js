
bus={
    number:'372E',
    type: 'Private',
    vfr: 'bdkahdk'

}

car={
    type: 'Private',

    number:'372E',
    
}
check(bus,car)



function check(a,b)
{
        for (var i in a)
        {
            if (a[i]!=b[i])
            return false
        }

    console.log(true)
 }












