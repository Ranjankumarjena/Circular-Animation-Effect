function page1(){
var circle = document.querySelector(".circle");
var heroText=document.querySelector(".hero-text");
var textDiv = document.querySelectorAll(".text-div");
var red = document.querySelectorAll("#red");
var span = document.querySelectorAll(".text-div span");
var two = document.querySelectorAll("#two");
const lerp = (x, y, a) => x * (1 - a) + y * a;
window.addEventListener("mousemove", function(dets){
  gsap.to(circle,{
    x:dets.clientX,
    y:dets.clientY,
    
  })

});
heroText.addEventListener("mousemove", function(dets){
    
    
    gsap.to(circle,{
        scale:4,
        backgroundColor:"#EB5939",
        height:"250px",
        width:"250px",
        
    })
    red.forEach(function(e){
        e.style.color = " #0E0E0E";
    })

   span.forEach(function(t){
    gsap.to(t,{
        y:"-140px",
        duration:0.5,
        ease:""
    })
   })
   document.querySelector("#black").style.color = "black";

});
heroText.addEventListener("mouseleave", function(dets){
    gsap.to(circle,{
        scale:0.5,
        height:"70px",
        width:"70px"
    })
    red.forEach(function(e){
        e.style.color = "#EB5939";
    })
    span.forEach(function(t){
        gsap.to(t,{
            y:"0",
            duration:2.5,
            ease:"elastic.out"
        })
       })
    
 document.querySelector("#black").style.color = "#B7AB98";
       
});
textDiv.forEach(function(td){
    td.addEventListener("mousemove",function(dets){
     var dims =td.getBoundingClientRect();  
     var xstart = dims.x;
     var xend = dims.x + dims.width;

     var zeroone = gsap.utils.mapRange(xstart, xend , 0, 1, dets.clientX);
     
     gsap.to(span,{
        x:lerp(-100, 100, zeroone),
         ease:"elastic.out",
         duration:0.3
     })

    })
    

    td.addEventListener("mouseleave",function(dets){
        var dims =td.getBoundingClientRect();  
        var xstart = dims.x;
        var xend = dims.x + dims.width;
   
        var zeroone = gsap.utils.mapRange(xstart, xend , 0, 1, dets.clientX);
        
        gsap.to(span,{
           x:0
        })
   
       })
});

};
page1();

function page2(){
    OnlineWebFonts_Com({
        'Id':'.div',
        'Data':__Animations['271'],
    }).Play();
    

};
page2();