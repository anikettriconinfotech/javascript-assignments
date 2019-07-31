var object1 = {
    name : 'Harry',
    number1 : 12,
    
};

var object2 = {
    name : 'Harry',
    number1 : 12,
};

var object3 = {
    name : 'Potter',
    number2 : 12,
};


function compare(obj1,obj2){
   var equal = true;
   var k1 = Object.keys(obj1);
   var k2 = Object.keys(obj2);
   var v1 = Object.values(obj1);
   var v2 = Object.values(obj2);
   if(k1.length == k2.length){
       var i = 0;
       while(i < k1.length)
       {
           if(k1[i] == k2[i]) //checks if the keys are same
           {
               if(v1[i] == v2[i]){ //checks if the values are same
                   i++;

               }
               else{
                   equal = false;
                   break;
               }
           }
           else{
               equal = false;
               break;
           }
       }
   }
   else{
    equal = false; 
   }
  
   if(equal)
   {
       console.log("The objects are equal");
   }
   else
   {
       console.log("The objects are not equal");
   }
}

compare(object1,object2)
compare(object1,object3)
