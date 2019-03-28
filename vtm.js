window.onload=function(){
var one=document.getElementById("content-left_1");
var two=document.getElementById("content-left_2");
var three=document.getElementById("content-left_3");
var forth=document.getElementById("content-left_4");

function first(){
  one.style.display="inline-block";
  two.style.display="none";
  three.style.display="none";
  forth.style.display="none";
}

function second(){
    one.style.display="none";
    two.style.display="inline-block";
    three.style.display="none";
    forth.style.display="none";
  }
  
function third(){
    one.style.display="none";
    two.style.display="none";
    three.style.display="inline-block";
    forth.style.display="none";
  }
  
function forth(){
    one.style.display="none";
    two.style.display="none";
    three.style.display="none";
    forth.style.display="inline-block";
  }
}