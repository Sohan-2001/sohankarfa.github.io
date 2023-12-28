var a=0;
var b='a boy of fancies';
var speed=100;
window.onload=function typeWriter()
{
if(a<b.length){
  document.getElementById("typing").innerHTML+=b.charAt(a);
  a++;
  setTimeout(typeWriter,speed);
}
}

var today = new Date();
var time = today.getHours();
if((time>=4)&&(time<=11)){
  var Greet=document.getElementById('Time').innerHTML="Good Morning";
}
else if((time>11)&&(time<=16)){
  var Greet=document.getElementById('Time').innerHTML="Good Noon";
}
else if((time>16)&&(time<=17)){
  var Greet=document.getElementById('Time').innerHTML="Good Afternoon";
}
else if((time>17)&&(time<=18)){
  var Greet=document.getElementById('Time').innerHTML="Good Evening";
}
else{
  var Greet=document.getElementById('Time').innerHTML="Good Night";
}


/*
window.onload=function()
{
    var i = 0;
    var txt = '<Welcome>';
    var speed = 200;
    var x = document.getElementById("myAudio"); 
    x.play();
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
    var element = document.getElementById("loaded");
   element.classList.toggle("pre");
}
*/
