$("body").css ("background-color","#252526");

for (var dots = 0; dots < 20; dots++) {
    $(".wrapper").append ("<div class='circle'></div>");
}

 //mouse interaction
  $('.circle').mouseover(function(){
    $(this).css('background-color','#7b0eef');
  });
  $('.circle').mouseout(function(){
    $(this).css('background-color','#ecdbff');
  });

var counter =0;

$(".circle").each(function(){
    console.log(counter);
    //$(this).html(counter);
    $(this).css("opacity",(counter/20));
    $(this).css("border-radius","80%");
    $(this).css("height",(20+counter));
     $(this).css("width",(20+counter));
      $(this).css("font-size",(counter));
       $(this).css("transform","rotate("+ (counter/20)*360 + "deg)");
    var winWidth =$(window).width();
    var winHeight =$(window).height();
    var newTop = Math.floor(Math.random()*winHeight);
    var newLeft = Math.floor(Math.random()*winWidth);
    $(this).css("top", Math.floor(Math.random()*$(window).height()));
    $(this).css("left", Math.floor(Math.random()*$(window).width()));
    counter++;
    
//this code runs for each instance of circle

});

$(window).scroll(function() {
    console.log("you scrolled");
    $(".story").css("opacity",$(window).scrollTop)
})



for (var dots = 0; dots < 20; dots++) {
    $(".wrapper").append ("<div class='circle1'></div>");
}

//mouse interaction
  $('.circle1').mouseover(function(){
    $(this).css('background-color','#7b0eef');
  });
  $('.circle1').mouseout(function(){
    $(this).css('background-color','#ecdbff');
  });

var counter =20;

$(".circle1").each(function(){
    console.log(counter);
    //$(this).html(counter);
    $(this).css("opacity",(counter/20));
    $(this).css("border-radius","80%");
    $(this).css("height",(20+counter));
     $(this).css("width",(20+counter));
      $(this).css("font-size",(counter));
       $(this).css("transform","rotate("+ (counter/20)*360 + "deg)");
    var winWidth =$(window).width();
    var winHeight =$(window).height();
    var newTop = Math.floor(Math.random()*winHeight);
    var newLeft = Math.floor(Math.random()*winWidth);
    $(this).css("top", Math.floor(Math.random()*$(window).height()));
    $(this).css("left", Math.floor(Math.random()*$(window).width()));
    counter++;
    
//this code runs for each instance of circle

});

$(window).scroll(function() {
    console.log("you scrolled");
    $(".story").css("opacity",$(window).scrollTop)
})

for (var dots = 0; dots < 20; dots++) {
    $(".wrapper").append ("<div class='circle2'></div>");
}

//mouse interaction
  $('.circle2').mouseover(function(){
    $(this).css('background-color','#7b0eef');
  });
  $('.circle2').mouseout(function(){
    $(this).css('background-color','#ecdbff');
  });

var counter =40;

$(".circle2").each(function(){
    console.log(counter);
    //$(this).html(counter);
    $(this).css("opacity",(counter/40));
    $(this).css("border-radius","80%");
    $(this).css("height",(40+counter));
     $(this).css("width",(40+counter));
      $(this).css("font-size",(counter));
       $(this).css("transform","rotate("+ (counter/40)*360 + "deg)");
    var winWidth =$(window).width();
    var winHeight =$(window).height();
    var newTop = Math.floor(Math.random()*winHeight);
    var newLeft = Math.floor(Math.random()*winWidth);
    $(this).css("top", Math.floor(Math.random()*$(window).height()));
    $(this).css("left", Math.floor(Math.random()*$(window).width()));
    counter++;
    
//this code runs for each instance of circle

});

$(window).scroll(function() {
    console.log("you scrolled");
    $(".story").css("opacity",$(window).scrollTop)
})

for (var dots = 0; dots < 20; dots++) {
    $(".wrapper").append ("<div class='circle3'></div>");
}

//mouse interaction
  $('.circle3').mouseover(function(){
    $(this).css('background-color','#7b0eef');
  });
  $('.circle3').mouseout(function(){
    $(this).css('background-color','#ecdbff');
  });

var counter =60;

$(".circle3").each(function(){
    console.log(counter);
    //$(this).html(counter);
    $(this).css("opacity",(counter/60));
    $(this).css("border-radius","80%");
    $(this).css("height",(60+counter));
     $(this).css("width",(60+counter));
      $(this).css("font-size",(counter));
       $(this).css("transform","rotate("+ (counter/60)*360 + "deg)");
    var winWidth =$(window).width();
    var winHeight =$(window).height();
    var newTop = Math.floor(Math.random()*winHeight);
    var newLeft = Math.floor(Math.random()*winWidth);
    $(this).css("top", Math.floor(Math.random()*$(window).height()));
    $(this).css("left", Math.floor(Math.random()*$(window).width()));
    counter++;
    
//this code runs for each instance of circle

});

$(window).scroll(function() {
    console.log("you scrolled");
    $(".story").css("opacity",$(window).scrollTop)
})

for (var dots = 0; dots < 20; dots++) {
    $(".wrapper").append ("<div class='circle4'></div>");
}

 //mouse interaction
  $('.circle4').mouseover(function(){
    $(this).css('background-color','#7b0eef');
  });
  $('.circle4').mouseout(function(){
    $(this).css('background-color','#ecdbff');
  });

var counter =0;

$(".circle4").each(function(){
    console.log(counter);
    //$(this).html(counter);
    $(this).css("opacity",(counter/80));
    $(this).css("border-radius","80%");
    $(this).css("height",(80+counter));
     $(this).css("width",(80+counter));
      $(this).css("font-size",(counter));
       $(this).css("transform","rotate("+ (counter/80)*360 + "deg)");
    var winWidth =$(window).width();
    var winHeight =$(window).height();
    var newTop = Math.floor(Math.random()*winHeight);
    var newLeft = Math.floor(Math.random()*winWidth);
    $(this).css("top", Math.floor(Math.random()*$(window).height()));
    $(this).css("left", Math.floor(Math.random()*$(window).width()));
    counter++;
    
//this code runs for each instance of circle

});

$(window).scroll(function() {
    console.log("you scrolled");
    $(".story").css("opacity",$(window).scrollTop)
})

for (var dots = 0; dots < 20; dots++) {
    $(".wrapper").append ("<div class='circle5'></div>");
}

 //mouse interaction
  $('.circle5').mouseover(function(){
    $(this).css('background-color','#7b0eef');
  });
  $('.circle5').mouseout(function(){
    $(this).css('background-color','#ecdbff');
  });

var counter =100;

$(".circle5").each(function(){
    console.log(counter);
    // $(this).html(counter);
    $(this).css("opacity",(counter/100));
    $(this).css("border-radius","80%");
    $(this).css("height",(100+counter));
     $(this).css("width",(100+counter));
      $(this).css("font-size",(counter));
       $(this).css("transform","rotate("+ (counter/100)*360 + "deg)");
    var winWidth =$(window).width();
    var winHeight =$(window).height();
    var newTop = Math.floor(Math.random()*winHeight);
    var newLeft = Math.floor(Math.random()*winWidth);
    $(this).css("top", Math.floor(Math.random()*$(window).height()));
    $(this).css("left", Math.floor(Math.random()*$(window).width()));
    counter++;
    
//this code runs for each instance of circle

});

$(window).scroll(function() {
    console.log("you scrolled");
    $(".story").css("opacity",$(window).scrollTop)
})


for (var dots = 0; dots < 20; dots++) {
    $(".wrapper").append ("<div class='circle6'></div>");
}

 //mouse interaction
  $('.circle6').mouseover(function(){
    $(this).css('background-color','#7b0eef');
  });
  $('.circle6').mouseout(function(){
    $(this).css('background-color','#ecdbff');
  });

var counter =120;

$(".circle6").each(function(){
    console.log(counter);
    //$(this).html(counter);
    $(this).css("opacity",(counter/120));
    $(this).css("border-radius","80%");
    $(this).css("height",(120+counter));
     $(this).css("width",(120+counter));
      $(this).css("font-size",(counter));
       $(this).css("transform","rotate("+ (counter/120)*360 + "deg)");
    var winWidth =$(window).width();
    var winHeight =$(window).height();
    var newTop = Math.floor(Math.random()*winHeight);
    var newLeft = Math.floor(Math.random()*winWidth);
    $(this).css("top", Math.floor(Math.random()*$(window).height()));
    $(this).css("left", Math.floor(Math.random()*$(window).width()));
    counter++;
    
//this code runs for each instance of circle

});

$(window).scroll(function() {
    console.log("you scrolled");
    $(".story").css("opacity",$(window).scrollTop)
})
