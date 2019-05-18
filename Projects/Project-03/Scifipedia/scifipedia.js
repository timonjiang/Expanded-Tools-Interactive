/*$("button").click(function(){
  $("container_logo").fadeOut();
});*/

/*$(document).ready(function(){
  $(".btn1").click(function(){
    $(".container_logo").fadeOut()
  });
  
});

<button class="btn1">Enter</button>

*/


$(document).ready(function(){

  $(".container_logo").click(function(){
    $(".container_logo").fadeOut();
  });

   });



$(document).ready(function(){
  $(".back").click(function(){
    $("#content").fadeOut(500, function(){
    });
  });
  $(".shape2").click(function(){
    $("#content").fadeIn(200, function(){
    });

  });
});

