const bg=document.getElementsByTagName("body");
const red=document.getElementById("red");
const yellow=document.getElementById("yellow");
const green=document.getElementById("green");
const blue=document.getElementById("blue");
const orange=document.getElementById("orange");
const reset=document.getElementById("reset");
red.addEventListener("click",function(){
    bg[0].style.backgroundColor="red";
});
yellow.addEventListener("click",function(){
    bg[0].style.backgroundColor="yellow";
});
green.addEventListener("click",function(){
    bg[0].style.backgroundColor="green";
});
blue.addEventListener("click",function(){
    bg[0].style.backgroundColor="blue";
});
orange.addEventListener("click",function(){
    bg[0].style.backgroundColor="orange";
});
reset.addEventListener("click",function(){
    bg[0].style.backgroundColor="white";
});
