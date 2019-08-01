

$(document).ready(function(){

      $("#add").click(function(){
      
        var input1 = $("#input1").val();
        var input2 = $("#input2").val();

        if(!input1 || !input2){
            $("#error").append('enter all the inputs'); 
         }
 
         let result = parseInt(input1) + parseInt(input2);
         $('#addResult').append(result);
      });

      $("#difference").click(function(){

        var input1 = $("#input1").val();
        var input2 = $("#input2").val();

        if(!input1 || !input2){
            $("#error").append('enter all the inputs'); 
         }
        
         let result = parseInt(input1) - parseInt(input2);
         $('#differenceResult').append(result);
      });

      $("#product").click(function(){

       
        var input1 = $("#input1").val();
        var input2 = $("#input2").val();

        if(!input1 || !input2){
            $("#error").append('enter all the inputs'); 
         }


         let result = parseInt(input1) * parseInt(input2);
         $('#productResult').append(result);
      });

      $("#ratio").click(function(){
      
        var input1 = $("#input1").val();
        var input2 = $("#input2").val();

        if(!input1 || !input2){
            $("#error").append('enter all the inputs'); 
         }
      
         let result = parseInt(input1) / parseInt(input2);
         $('#ratioResult').append(result);
      });

  });
