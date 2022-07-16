var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var magicball = new Image();
var magicball_hole_blue = new Image();
var magicball_hole_green = new Image();
var magicball_hole_orange = new Image();
var magicball_hole_red = new Image();
var magicball_hole = new Image();
var wait = new Image();

magicball.src = "../img/Ball_of_answers/magicball.png";
magicball_hole_blue.src = "../img/Ball_of_answers/magicball-hole-blue.png";
magicball_hole_green.src = "../img/Ball_of_answers/magicball-hole-green.png";
magicball_hole_orange.src = "../img/Ball_of_answers/magicball-hole-orange.png";
magicball_hole_red.src = "../img/Ball_of_answers/magicball-hole-red.png";
magicball_hole.src = "../img/Ball_of_answers/magicball-hole.png";
wait.src = "../img/Ball_of_answers/icon_64x64.png";

var ball_array=["Бесспорно","Предрешено","Никаких сомнений","Определённо да","Можешь быть уверен",
"Мне кажется -","Вероятнее всего","Хорошие перспективы","Знаки говорят -","Да","Пока не ясно,","Спроси позже",
"Лучше не рассказывать","Сейчас нельзя","Сконцентрируйся и","Даже не думай","Мой ответ — «нет»",
"По моим данным -","Перспективы не","Весьма сомнительно"];

var ball_array_second=[" "," "," "," ","в этом", "«да»"," "," ","«да»"," ","попробуй снова"," ",
" ","предсказать","спроси опять"," "," ", "«нет»","очень хорошие"," ",];

var a = magicball_hole;
magicball.style.cursor = "pointer";
a.id = "my2"

ctx.fillStyle = "white";
ctx.font = "14px Verdana";
ctx.textAlign = "center";

b="Задайте вопрос";
c="и жми на центр"
function draw() {
   ctx.drawImage(magicball, 0, 0);
   ctx.drawImage(a, 87, 108);
   ctx.fillText(b, 165,160,135);
   ctx.fillText(c, 165, 180, 125);

   /*var link;
   link = document.getElementById("my");
   link.onclick = function work() {  
     q = Math.floor((Math.random() * 19));
     b = ball_array[q];
     c = ball_array_second[q];
     if (q<=5) 
     a = magicball_hole_green,
     requestAnimationFrame(stop),
     ctx.fillText(b, 100,160),
     ctx.fillText(c, 165, 180, 125);
     else if (q>5 && q<=10)
     a = magicball_hole_blue,
     requestAnimationFrame(stop),
     ctx.fillText(b, 100,160),
     ctx.fillText(c, 165, 180, 125);
     else if (q>10 && q<=15)
     a = magicball_hole_orange,
     requestAnimationFrame(stop),
     ctx.fillText(b, 100,160),
     ctx.fillText(c, 165, 180, 125);
     else if (q>15 && q<=19)
     a = magicball_hole_red,
     requestAnimationFrame(stop),
     ctx.fillText(b, 100,160),
     ctx.fillText(c, 165, 180, 125);
   }*/
   canvas.addEventListener("click", function(event){
   
    let X = event.clientX - canvas.getBoundingClientRect().x;
    let Y = event.clientY - canvas.getBoundingClientRect().y;
    if (X >= 85 && Y >= 100 && X <= 245 && Y <= 250) {
      q = Math.floor((Math.random() * 19));
      b = ball_array[q];
      c = ball_array_second[q];
      if (q<=5) 
      a = magicball_hole_green,
      requestAnimationFrame(stop),
      ctx.fillText(b, 100,160),
      ctx.fillText(c, 165, 180, 125);
      else if (q>5 && q<=10)
      a = magicball_hole_blue,
      requestAnimationFrame(stop),
      ctx.fillText(b, 100,160),
      ctx.fillText(c, 165, 180, 125);
      else if (q>10 && q<=15)
      a = magicball_hole_orange,
      requestAnimationFrame(stop),
      ctx.fillText(b, 100,160),
      ctx.fillText(c, 165, 180, 125);
      else if (q>15 && q<=19)
      a = magicball_hole_red,
      requestAnimationFrame(stop),
      ctx.fillText(b, 100,160),
      ctx.fillText(c, 165, 180, 125);
    } 
    
    /*let i = Math.floor(Y/SPACE_SIZE);
    let j = Math.floor(X/SPACE_SIZE);
    let id = board[i][j];
    console.log(X, Y);*/
  });
  
  /*  cvs.onclick = function work2() {  
    q = Math.floor((Math.random() * 19));
    b = ball_array[q];
    c = ball_array_second[q];
    if (q<=5) 
    a = magicball_hole_green,
    requestAnimationFrame(stop),
    ctx.fillText(b, 100,160),
    ctx.fillText(c, 165, 180, 125);
    else if (q>5 && q<=10)
    a = magicball_hole_blue,
    requestAnimationFrame(stop),
    ctx.fillText(b, 100,160),
    ctx.fillText(c, 165, 180, 125);
    else if (q>10 && q<=15)
    a = magicball_hole_orange,
    requestAnimationFrame(stop),
    ctx.fillText(b, 100,160),
    ctx.fillText(c, 165, 180, 125);
    else if (q>15 && q<=19)
    a = magicball_hole_red,
    requestAnimationFrame(stop),
    ctx.fillText(b, 100,160),
    ctx.fillText(c, 165, 180, 125);
  }*/
requestAnimationFrame(draw);
};
a.onload = draw;

cvs.addEventListener("mousemove", function(evt) {
  if (evt.offsetX >= 85 && evt.offsetY >= 100 && evt.offsetX <= 245 && evt.offsetY <= 250) {
    cvs.style.cursor = "pointer";
  } 
  else {
    cvs.style.cursor = "default";	
  }
  });
/*
  cvs.removeEventListener("mousemove", function(evt) {
  if (evt.offsetX >= 85 && evt.offsetY >= 100 && evt.offsetX <= 245 && evt.offsetY <= 250) {
    cvs.style.cursor = "pointer";
  } 
  else {
    cvs.style.cursor = "default";	
  }
  });
  
  cvs.addEventListener("mousemove", function(evt2) {
    if (evt2.offsetX >= 260 && evt2.offsetY >= 260 && evt2.offsetX <= 445 && evt2.offsetY <= 450) {
      cvs.style.cursor = "pointer";
    } 
    else {
      cvs.style.cursor = "default";	
    }
    });
*/
  canvas.addEventListener("click", function(event){
   
    let X = event.clientX - canvas.getBoundingClientRect().x;
    let Y = event.clientY - canvas.getBoundingClientRect().y;
    
    
    /*let i = Math.floor(Y/SPACE_SIZE);
    let j = Math.floor(X/SPACE_SIZE);
    let id = board[i][j];
    console.log(X, Y);*/
  });


/*
canvas.addEventListener("click", function(event) {
  let X = event.clientX ;
  let Y = event.clientY ;
  console.log(X,Y)
  });
*/

/*
var imgX = 100,
imgY = 100,
imgSize = 200;
var canvas = document.querySelector(".canvas"),
  ctx = canvas.getContext("2d");
var img = new Image();
img.src = "https://picsum.photos/id/320/200/200";
img.addEventListener("load", function() {
ctx.drawImage(img, imgX, imgY, imgSize, imgSize);
});
canvas.addEventListener("mousemove", function(evt) {
if (evt.offsetX >= imgX && evt.offsetY >= imgY && evt.offsetX <= imgX + imgSize && evt.offsetY <= imgY + imgSize) {
  canvas.style.cursor = "pointer";
} else {
  canvas.style.cursor = "default";	
}
});
*/

//cvs.addEventListetener("click", function(event){
//  let X = event.clientX - canvas.getBoundingClientRect().x;
//  let Y = event.clientX - canvas.getBoundingClientRect().y;
//  console.log(X,Y);
//}
//)


//let game = setInterval(draw, 20000000);
//!function(){"use strict";
//var a=window.jQuery;
//a(function(){
 //  a("#genbutton").on("click",function(){a(this).hasClass("disabled")||(a(this).fadeOut(200).removeClass().addClass("disabled"),
  // a("#cssload-loader").fadeIn(200),a("#genbutton .ball-text").fadeOut(500),
  // setTimeout(function(){!function(){var t={action:"magicball",
  // lang:$("body").attr("data-lang")};t=$(this).serialize()+"&"+$.param(t),$.ajax({type:"POST",dataType:"json",
  // url:"/ajax/magicball.php",data:t,success:function(t){a("#genbutton").removeClass().addClass(t.group),
  // a("#magicballresult .ball-text").html(t.answer),a("#cssload-loader").fadeOut(100),
  // a("#genbutton").fadeIn(200),a("#genbutton .ball-text").fadeIn(500)}})}()},1e3))})})}();  

 // canvas.addEventListetener
 //getBoundingClientRect