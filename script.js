$(document).ready(function(){
    $(".nav-bar").click(function(){
        $("#side-nav").slideToggle(1000);
    });
    $("#cross").click(function(){
        $("#side-nav").hide(1000);
    });
});


var main = document.querySelector("body");

var curser = document.querySelector(".curser");

main.addEventListener("mouseenter" ,function(){
   gsap.to(curser, {
     opacity:1,
     scale:1
   })
});
main.addEventListener("mouseleave" ,function(){
    gsap.to(curser, {
      opacity:0,
      scale:0
    })
 });

 main.addEventListener("mousemove", function(dets) {
    gsap.to(curser, {
        left: dets.x-50,
        top: dets.y,
        duration: 0.2, // You can adjust the duration as needed
    });
});

$(document).ready(function(){
    $(".faq-main").click(function(){
        $(".content").slideToggle();
        var x= $(".plus").text();
        if(x=="-"){
            $(".plus").text("+");
        }
        else{
            $(".plus").text("-");
        }
    });
    $(".faq-main-2").click(function(){
        $(".content-2").slideToggle();
        var x= $(".plus").text();
        if(x=="-"){
            $(".plus").text("+");
        }
        else{
            $(".plus").text("-");
        }
    });
    $(".faq-main-3").click(function(){
        $(".content-3").slideToggle();
        var x= $(".plus").text();
        if(x=="+"){
            $(".plus").text("-");
        }
        else{
            $(".plus").text("+");
        }
    });
    $(".faq-main-4").click(function(){
        $(".content-4").slideToggle();
        var x= $(".plus").text();
        if(x=="-"){
            $(".plus").text("-");
        }
        else{
            $(".plus").text("+");
        }
    });
});