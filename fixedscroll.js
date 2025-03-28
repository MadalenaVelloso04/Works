// When the user scrolls the page, execute scroll 
window.onscroll = function() {scroll()};

// Get the ids for the divs
var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");
var text4 = document.getElementById("text4");
function scroll() {
    /*
    I was having problems with the measurement of position (I set the offset to the div instead of the section so it didn't work properly) so I wanted to get the actual values. You can just ignore this
    text1.innerHTML = one.offsetTop;
    text2.innerHTML = two.offsetTop;
    text3.innerHTML = three.offsetTop;
    text4.innerHTML = four.offsetTop;*/
  
  //I'm sure there's a neater and more accurate approach to this but, hey, if it works it works.
if (window.pageYOffset > two.offsetTop){
  text2.style.position="fixed";
}
 else if (window.pageYOffset < two.offsetTop){
   text2.style.position="absolute";
 } 
if (window.pageYOffset > three.offsetTop){
  text3.style.position="fixed";
}
else if (window.pageYOffset < three.offsetTop){
   text3.style.position="absolute";
 } 
}