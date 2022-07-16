var canvas2 = document.getElementById("canvas2");
var ctz = canvas2.getContext("2d");

var background = new Image();
background.src = "../img/table.png";

ctz.fillStyle = "white";ctz.font = "20px Verdana";ctz.textAlign = "center";

let GAME_OVER = false;

club_6 = 6; heart_6 = 6; diamond_6 = 6;spade_6 = 6;club_7 = 7;heart_7 = 7;diamond_7 = 7;spade_7 = 7;club_8 = 8;heart_8 = 8;diamond_8 = 8;spade_8 = 8;club_9 = 9;heart_9 = 9;diamond_9 = 9;spade_9 = 9;club_10 = 10;heart_10 = 10;diamond_10 = 10;
spade_10 = 10;jack_club = 2;jack_heart = 2;jack_diamond = 2;jack_spade = 2;queen_club = 3;queen_heart = 3;queen_diamond = 3;queen_spade = 3;king_club = 4;king_heart = 4;king_diamond = 4;king_spade = 4;ace_club = 11;ace_heart = 11;ace_diamond = 11;ace_spade = 11;

var Array = [club_6,club_7,club_8,club_9,club_10,jack_club,queen_club,king_club,ace_club,
heart_6,heart_7,heart_8,heart_9,heart_10,jack_heart,queen_heart,king_heart,ace_heart,
diamond_6,diamond_7,diamond_8,diamond_9,diamond_10,jack_diamond,queen_diamond,king_diamond,ace_diamond,
spade_6,spade_7,spade_8,spade_9,spade_10,jack_spade,queen_spade,king_spade,ace_spade];

var t6 = new Image();var t7 = new Image();var t8 = new Image();var t9 = new Image();var t10 = new Image();var jt = new Image();var qt = new Image();var kt = new Image();var at = new Image();
var c6 = new Image();var c7 = new Image();var c8 = new Image();var c9 = new Image();var c10 = new Image();var jc = new Image();var qc = new Image();var kc = new Image();var ac = new Image();
var b6 = new Image();var b7 = new Image();var b8 = new Image();var b9 = new Image();var b10 = new Image();var jb = new Image();var qb = new Image();var kb = new Image();var ab = new Image();
var p6 = new Image();var p7 = new Image();var p8 = new Image();var p9 = new Image();var p10 = new Image();var jp = new Image();var qp = new Image();var kp = new Image();var ap = new Image();

var fild = new Image();fild.src = "../img/21/fild.png";
var moo = new Image();moo.src = "../img/21/moo.jpg";
var stand = new Image();stand.src = "../img/21/stand.png";

t6.src = "../img/cards/6t.jpg";t7.src = "../img/cards/7t.jpg";t8.src = "../img/cards/8t.jpg";t9.src = "../img/cards/9t.jpg";t10.src = "../img/cards/10t.jpg";
jt.src = "../img/cards/jt.jpg"; qt.src = "../img/cards/qt1.jpg"; kt.src = "../img/cards/kt1.jpg";at.src = "../img/cards/at.jpg";
c6.src = "../img/cards/6c.jpg";c7.src = "../img/cards/7c.jpg";c8.src = "../img/cards/8c.jpg";c9.src = "../img/cards/9c.jpg";c10.src = "../img/cards/10c.jpg";
jc.src = "../img/cards/jc.jpg";qc.src = "../img/cards/qc1.jpg";kc.src = "../img/cards/kc1.jpg";ac.src = "../img/cards/ac.jpg";
b6.src = "../img/cards/6b.jpg";b7.src = "../img/cards/7b.jpg";b8.src = "../img/cards/8b.jpg";b9.src = "../img/cards/9b.jpg";b10.src = "../img/cards/10b.jpg";
jb.src = "../img/cards/jb.jpg";qb.src = "../img/cards/qb1.jpg";kb.src = "../img/cards/kb1.jpg";ab.src = "../img/cards/ab.jpg";
p6.src = "../img/cards/6p.jpg";p7.src = "../img/cards/7p.jpg";p8.src = "../img/cards/8p1.jpg";p9.src = "../img/cards/9p.jpg";p10.src = "../img/cards/10p.jpg";
jp.src = "../img/cards/jp.jpg";qp.src = "../img/cards/qp1.jpg";kp.src = "../img/cards/kp1.jpg";ap.src = "../img/cards/ap.jpg";

var Array_rus = [t6,t7,t8,t9,t10,jt,qt,kt,at,
    c6,c7,c8,c9,c10,jc,qc,kc,ac,
    b6,b7,b8,b9,b10,jb,qb,kb,ab,
    p6,p7,p8,p9,p10,jp,qp,kp,ap,];

var n = 35;   //колличество карт в колоде
var p=0;      //число карт в массиве игрока
var i=0;      // число карт у игрока(в массиве игрока)
//var z = 0;    // название карт игрока(в массиве игрока)
var playerScore = 0;
var q = Math.floor((Math.random() * n));
n--;
//var q=17;
var Player = [];
var Player_card = [];
Player[p]= Array[q];
Player_card[p]= Array_rus[q];
p++;
Array.splice(q,1);
Array_rus.splice(q,1);
q = Math.floor((Math.random() * n));
n--;
//var q=8;
Player[p]= Array[q];
Player_card[p]= Array_rus[q];
p++;
Array.splice(q,1);
Array_rus.splice(q,1);
playerScore = Player[i] + Player[++i];

q = Math.floor((Math.random() * n));
n--;
var Comp = [];
var Comp_card = [];
var c1=0;      //число карт в массиве компьютера
var j=0;      // число карт у компьютера(в массиве компьютера)
Comp[c1]= Array[q];
Comp_card[c1]= Array_rus[q];
c1++;
Array.splice(q,1);
Array_rus.splice(q,1);
q = Math.floor((Math.random() * n));
n--;
Comp[c1]= Array[q];
Comp_card[c1]= Array_rus[q];
c1++;
Array.splice(q,1);
Array_rus.splice(q,1);
compScore = Comp[j] + Comp[++j];

function draw2() {
    ctz.drawImage(background, 0, 0);
    ctz.fillText("Ваши карты", 100,60,135);ctz.fillText("Карты противника", 450,60);
    ctz.drawImage(Player_card[0], 30, 100,75,100);ctz.drawImage(Player_card[1], 60, 100,75,100);
    ctz.drawImage(fild, 337,236,235,35);ctz.drawImage(fild, 23,236,155,35);
    ctz.fillText("Ваши очки "+playerScore, 100,260,135);ctz.fillText("Очки противника "+compScore, 450,260,200);
    ctz.drawImage(Comp_card[0], 350, 100,75,100);ctz.drawImage(Comp_card[1], 380, 100,75,100);
    ctz.drawImage(moo, 250, 100, 65,40);ctz.drawImage(stand, 250, 165, 65,35);
    
    if(playerScore==22){
      ctz.clearRect ( 30, 240 , 150 , 25 );
      ctz.drawImage(fild, 23,236,155,35);
      ctz.fillText("Ваши очки "+"21", 100,260,135);
      playerScore = 21;
    }
    else{
    if(playerScore<21){ 
    canvas2.addEventListener("click", function(event){
      let X = event.clientX - canvas.getBoundingClientRect().x;
      let Y = event.clientY - canvas.getBoundingClientRect().y;
      requestAnimationFrame(stop)
      if(playerScore<21){ 
      if (X >= 640 && Y >= 100 && X <= 707 && Y <= 135) {
        q = Math.floor((Math.random() * n));
        n--;
        Player[p]= Array[q];
        Player_card[p]= Array_rus[q];
        p++;
        Array.splice(q,1);
        Array_rus.splice(q,1);
        playerScore = playerScore + Player[++i]
        console.log(playerScore)
        if(!!Player_card[2]){ctz.drawImage(Player_card[2], 90, 100,75,100);  };
        if(!!Player_card[3]){ctz.drawImage(Player_card[3], 120, 100,75,100); };
        if(!!Player_card[4]){ctz.drawImage(Player_card[4], 150, 100,75,100);  }; 
        ctz.clearRect ( 30, 240 , 150 , 25 );
        ctz.drawImage(fild, 23,236,155,35);
        ctz.fillText("Ваши очки "+playerScore, 100,260,135);}}
       else {window.stop();}})}}

    if(compScore==22){
      ctz.clearRect ( 340, 240 , 220 , 25 );
      ctz.drawImage(fild, 337,236,235,35);
      ctz.fillText("Очки противника "+"21", 450,260,200); 
      compScore = 21;
    }
    else{
    canvas2.addEventListener("click", function(event2){
      let X = event2.clientX - canvas.getBoundingClientRect().x;
      let Y = event2.clientY - canvas.getBoundingClientRect().y;
      if (compScore<18){ 
        if (X >= 640 && Y >= 168 && X <= 707 && Y <= 200) {
        while(compScore<18){     
        q = Math.floor((Math.random() * n));
        n--;
        Comp[c1]= Array[q];
        Comp_card[c1]= Array_rus[q];
        c1++;
        Array.splice(q,1);
        Array_rus.splice(q,1);
        compScore = compScore + Comp[++j]
        if (!!Comp_card[2]){ ctz.drawImage(Comp_card[2], 410, 100,75,100);}
        if (!!Comp_card[3]){ ctz.drawImage(Comp_card[3], 440, 100,75,100);}
        if (!!Comp_card[4]){ ctz.drawImage(Comp_card[4], 470, 100,75,100);}  
        ctz.clearRect ( 340, 240 , 220 , 25 );
        ctz.drawImage(fild, 337,236,235,35);
        ctz.fillText("Очки противника "+compScore, 450,260,200);}}} 

    else { 
      if (X >= 640 && Y >= 168 && X <= 707 && Y <= 200) {
        if (compScore > playerScore && compScore < 22){
          text = "Победил компьютер у него " + compScore + " Очков, а у Вас " + playerScore +" Очков";}
          else if (compScore < playerScore && playerScore < 22){
          text ="Победили Вы, у Вас " + playerScore + " Очков, а у Компьютера " + compScore +" Очков";}
          else if (playerScore > 21 && compScore < 22){
          text = "Победил компьютер у него " + compScore + " Очков, а у Вас " + playerScore +" Очков";}
          else if (playerScore < 22 && compScore > 21){
          text = "Победили Вы, у Вас " + playerScore + " Очков, а у Компьютера " + compScore +" Очков";}
          else if (playerScore > 21 && compScore > 21){
          text = "Ничья, у Вас " + playerScore + " Очков, а у Компьютера " + compScore +" Очков";}
          else if (playerScore === 21 && compScore === 21){
          text = "Ничья, у Вас " + playerScore + " Очков, и у Компьютера " + compScore +" Очков";}
          else if (playerScore === compScore && compScore < 22 && playerScore < 22){
          text = "Ничья, у Вас " + playerScore + " Очков, и у Компьютера " + compScore +" Очков";}
      showGameOver();
    GAME_OVER = true;}}})}}
background.onload = draw2;

canvas2.addEventListener("mousemove", function(evt) {
  if ((evt.offsetX >= 250 && evt.offsetY >= 100  && evt.offsetX <= 317 && evt.offsetY <= 135 )/*ЕЩЕ*/
  || (evt.offsetX >= 250 && evt.offsetY >= 165  && evt.offsetX <= 317 && evt.offsetY <= 200)) /*ВСЕ*/ {
    canvas2.style.cursor = "pointer";} 
  else{canvas2.style.cursor = "default";}});

function showGameOver(){
  gameOverElement.innerHTML = `
      <h1>${text}</h1>
      <div class="play" onclick="location.reload();">PLAY AGAIN!</div>
      `;
      gameOverElement.classList.remove("hide");}

  /*requestAnimationFrame(draw2);
   cancelAnimationFrame(draw2)*/

/* 
function drawText() {
  ctz.fillText("Ваши очки "+playerScore, 100,260,135);

canvas2.addEventListener("click", function(event3){
  let X = event3.clientX - canvas.getBoundingClientRect().x;
  let Y = event3.clientY - canvas.getBoundingClientRect().y;
  if (X >= 640 && Y >= 100 && X <= 707 && Y <= 135) {
    
}})
requestAnimationFrame(drawText);
}
drawText(onload);

function drawText2() {
  ctz.fillText("Очки противника "+compScore, 450,260); 
canvas2.addEventListener("click", function(event4){
  let X = event4.clientX - canvas.getBoundingClientRect().x;
  let Y = event4.clientY - canvas.getBoundingClientRect().y;
      if (X >= 640 && Y >= 168 && X <= 707 && Y <= 200) {
     
    }})
    requestAnimationFrame(drawText2);
  }
  drawText2(onload);


if (compScore > 20){
  alert("У Компьютера 21!!!! Ему выпали такие карты:"+Comp_card[0]+" и "+ Comp_card[1]);
  compScore = 21
}
else if (compScore === 17 || compScore === 18 || compScore === 19 || compScore === 20){
  alert("У Компьютера " + compScore + " Очков. Ему выпали такие карты:" +Comp_card[0]+" и "+ Comp_card[1] )
}
else if(compScore < 17) { for (i1=0; i1<5;) { 
  if (compScore === 17 || compScore === 18 || compScore === 19 || compScore === 20){
    if (i1==1){alert("У Компьютера " + compScore + " Очков. Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+" и "+ Comp_card[2]);
    i1=5;}
    else if (i1==2){alert("У Компьютера " + compScore + " Очков. Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+", "+ Comp_card[2]+" и "+ Comp_card[3])
    i1=5;}
    else if (i1==3){alert("У Компьютера " + compScore + " Очков. Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+", "+ Comp_card[2]+", "+ Comp_card[3]+" и "+ Comp_card[4])
    i1=5;}
  }

  else if (compScore == 21){
    if (i1==1){alert("У Компьютера 21!!!! Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+" и "+ Comp_card[2]);
    i1=5;}
    else if (i1==2){alert("У Компьютера 21!!!! Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+", "+ Comp_card[2]+" и "+ Comp_card[3])
    i1=5;}
    else if (i1==3){alert("У Компьютера 21!!!! Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+", "+ Comp_card[2]+", "+ Comp_card[3]+" и "+ Comp_card[4])
    i1=5;}
  }
  else if (compScore > 21){
    if (i1==1){alert("У Компьютера " + compScore + " Очков. Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+" и "+ Comp_card[2]);
    i1=5;}
    else if (i1==2){alert("У Компьютера " + compScore + " Очков. Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+", "+ Comp_card[2]+" и "+ Comp_card[3])
    i1=5;}
    else if (i1==3){alert("У Компьютера " + compScore + " Очков. Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+", "+ Comp_card[2]+", "+ Comp_card[3]+" и "+ Comp_card[4])
    i1=5;}
  }


  if (i1<5){
  q = Math.floor((Math.random() * n));
  n--;
  Comp[c]= Array[q];
  Comp_card[c]= Array_rus[q];
  c++;
  Array.splice(q,1);
  Array_rus.splice(q,1);
  compScore = compScore + Comp[++j]
  
  console.log(Comp_card)
  console.log(i1)
  }
  i1++;
}
}

var club_7 = new Image();var club_8 = new Image();var club_9 = new Image();var club_10 = new Image();
var jack_club = new Image();var club_6 = new Image();var club_6 = new Image();var club_6 = new Image();var club_6 = new Image();
var club_6 = new Image();var club_6 = new Image();var club_6 = new Image();var club_6 = new Image();var club_6 = new Image();
var club_6 = new Image();var club_6 = new Image();var club_6 = new Image();var club_6 = new Image();var club_6 = new Image();
var club_6 = new Image();var club_6 = new Image();var club_6 = new Image();var club_6 = new Image();var club_6 = new Image();
var club_6 = new Image();var club_6 = new Image();var club_6 = new Image();var club_6 = new Image();var club_6 = new Image();
var club_6 = new Image();var club_6 = new Image();var club_6 = new Image();var club_6 = new Image();var club_6 = new Image();
var club_6 = new Image();

club_7.src = "../img/cards/7.jpg";club_8.src = "../img/cards/8t.jpg";club_9.src = "../img/cards/9t.jpg";
club_10.src = "../img/cards/10t.jpg";club_6.src = "../img/cards/6t.jpg";jack_club.src = "../img/cards/jt.jpg";club_6.src = "../img/cards/6t.jpg";
club_6.src = "../img/cards/6t.jpg";club_6.src = "../img/cards/6t.jpg";club_6.src = "../img/cards/6t.jpg";club_6.src = "../img/cards/6t.jpg";
club_6.src = "../img/cards/6t.jpg";club_6.src = "../img/cards/6t.jpg";club_6.src = "../img/cards/6t.jpg";club_6.src = "../img/cards/6t.jpg";
club_6.src = "../img/cards/6t.jpg";club_6.src = "../img/cards/6t.jpg";club_6.src = "../img/cards/6t.jpg";club_6.src = "../img/cards/6t.jpg";
club_6.src = "../img/cards/6t.jpg";club_6.src = "../img/cards/6t.jpg";club_6.src = "../img/cards/6t.jpg";club_6.src = "../img/cards/6t.jpg";
club_6.src = "../img/cards/6t.jpg";club_6.src = "../img/cards/6t.jpg";club_6.src = "../img/cards/6t.jpg";club_6.src = "../img/cards/6t.jpg";
club_6.src = "../img/cards/6t.jpg";club_6.src = "../img/cards/6t.jpg";club_6.src = "../img/cards/6t.jpg";club_6.src = "../img/cards/6t.jpg";
club_6.src = "../img/cards/6t.jpg";club_6.src = "../img/cards/6t.jpg";club_6.src = "../img/cards/6t.jpg";club_6.src = "../img/cards/6t.jpg";


var club_6, heart_6, diamond_6, spade_6,club_7,heart_7,diamond_7,spade_7,club_8,heart_8,diamond_8,spade_8,club_9,heart_9,diamond_9,
spade_9,club_10,heart_10,diamond_10,spade_10,jack_club,jack_heart,jack_diamond,jack_spade,queen_club,queen_heart,queen_diamond,
queen_spade,king_club,king_heart,king_diamond,king_spade,ace_club,ace_heart,ace_diamond,ace_spade;

club_6 = {number: 6};heart_6 = {number: 6};diamond_6 = {number: 6};spade_6 = {number: 6};club_7 = {number: 7};heart_7 = {number: 7};
diamond_7 = {number: 7};spade_7 = {number: 7};club_8 = {number: 8};heart_8 = {number: 8};diamond_8 = {number: 8};spade_8 = {number: 8};
club_9 = {number: 9};heart_9 = {number: 9};diamond_9 = {number: 9};spade_9 = {number: 9};club_10 = {number: 10};heart_10 = {number: 10};
diamond_10 = {number: 10};spade_10 = {number: 10};jack_club = {number: 2};jack_heart = {number: 2};jack_diamond = {number: 2};
jack_spade = {number: 2};queen_club = {number: 3};queen_heart = {number: 3};queen_diamond = {number: 3};queen_spade = {number: 3};
king_club = {number: 4};king_heart = {number: 4};king_diamond = {number: 4};king_spade = {number: 4};ace_club = {number: 11};
ace_heart = {number: 11};ace_diamond = {number: 11};ace_spade = {number: 11};

club_6 = 6; heart_6 = 6; diamond_6 = 6;spade_6 = 6;club_7 = 7;heart_7 = 7;diamond_7 = 7;spade_7 = 7;club_8 = 8;heart_8 = 8;
diamond_8 = 8;spade_8 = 8;club_9 = 9;heart_9 = 9;diamond_9 = 9;spade_9 = 9;club_10 = 10;heart_10 = 10;diamond_10 = 10;
spade_10 = 10;jack_club = 2;jack_heart = 2;jack_diamond = 2;jack_spade = 2;queen_club = 3;queen_heart = 3;queen_diamond = 3;
queen_spade = 3;king_club = 4;king_heart = 4;king_diamond = 4;king_spade = 4;ace_club = 11;ace_heart = 11;ace_diamond = 11;ace_spade = 11;

var Array = [club_6,club_7,club_8,club_9,club_10,jack_club,queen_club,king_club,ace_club,
heart_6,heart_7,heart_8,heart_9,heart_10,jack_heart,queen_heart,king_heart,ace_heart,
diamond_6,diamond_7,diamond_8,diamond_9,diamond_10,jack_diamond,queen_diamond,king_diamond,ace_diamond,
spade_6,spade_7,spade_8,spade_9,spade_10,jack_spade,queen_spade,king_spade,ace_spade];

var Array_rus = ["6 креста","7 креста","8 креста","9 креста","10 креста","Валет креста","Дама креста","Король креста","Туз креста",
"6 чирва","7 чирва","8 чирва","9 чирва","10 чирва","Валет чирва","Дама чирва","Король чирва","Туз чирва",
"6 бубна","7 бубна","8 бубна","9 бубна","10 бубна","Валет бубна","Дама бубна","Король бубна","Туз бубнаа",
"6 пика","7 пика","8 пика","9 пика","10 пика","Валет пика","Дама пика","Король пика","Туз пика",];
var n = 31;   //колличество карт в колоде
var p=0;      //число карт в массиве игрока
var i=0;      // число карт у игрока(в массиве игрока)
//var z = 0;    // название карт игрока(в массиве игрока)
var playerScore = 0;
var q = Math.floor((Math.random() * n));
n--;
var Player = [];
var Player_card = [];
Player[p]= Array[q];
Player_card[p]= Array_rus[q];
p++;
Array.splice(q,1);
Array_rus.splice(q,1);
q = Math.floor((Math.random() * n));
n--;
Player[p]= Array[q];
Player_card[p]= Array_rus[q];
p++;
Array.splice(q,1);
Array_rus.splice(q,1);
playerScore = Player[i] + Player[++i];

if (playerScore > 20){
  alert("Поздравляю, у Вас 21!!!!!" + " Вам выпало: " + Player_card[0] +" и "+ Player_card[1]);
  playerScore = 21
}
else {for (i1=0; i1<5;) { 
  if (i1==0 && playerScore < 21){var result = confirm("Вам выпало: " + Player_card[0] +" и "+ Player_card[1] + "! У Вас " + playerScore + " очков! Ещё?")
    if (result===false){alert("У Вас " + playerScore + " Очков");i1=5;}
  }
  else if (i1==1 && playerScore < 21){var result = confirm("Вам выпало: " + Player_card[2] +" У Вас были такие карты: "+ Player_card[0] +" и "+ Player_card[1] + "! У Вас " + playerScore + " очков!")
    if (result===false){alert("У Вас " + playerScore + " Очков");i1=5;}
  }
  else if (i1==2 && playerScore < 21) {var result = confirm("Вам выпало: " + Player_card[3] +" У Вас были такие карты: "+ Player_card[0] +", "+ Player_card[1] +" и "+ Player_card[2] + "! У Вас " + playerScore + " очков! Ещё?")
    if (result===false){alert("У Вас " + playerScore + " Очков");i1=5;}
  }
  else if (i1==3 && playerScore < 21){var result = confirm("Вам выпало: " + Player_card[4] +" У Вас были такие карты: "+ Player_card[0] + ", "+ Player_card[1] +", "+ Player_card[2] +" и "+ Player_card[3] + "! У Вас " + playerScore + " очков!")
    if (result===false){alert("У Вас " + playerScore + " Очков");i1=5;}
  }


  else if (playerScore == 21){
    if (i1==1){alert("Поздравляю, у Вас 21!!!!"+"Вам выпало: " + Player_card[2] +" У Вас были такие карты: "+ Player_card[0] +" и "+ Player_card[1]);
    i1=5;}
    else if (i1==2){alert("Поздравляю, у Вас 21!!!!"+"Вам выпало: " + Player_card[3] +" У Вас были такие карты: "+ Player_card[0] + ", "+ Player_card[1] +" и "+ Player_card[2])
    i1=5;}
    else if (i1==3){alert("Поздравляю, у Вас 21!!!!"+"Вам выпало: " + Player_card[4] +" У Вас были такие карты: "+ Player_card[0] + ", "+ Player_card[1] +", "+ Player_card[2] +" и "+ Player_card[3])
    i1=5;}
  }


  else if (playerScore > 21){
    if (i1==1){alert("Вам выпало: " + Player_card[2] +" У Вас были такие карты: "+ Player_card[0] +" и "+ Player_card[1] + "! У Вас " + playerScore + " очков!");
    i1=5;}
    else if (i1==2){alert("Вам выпало: " + Player_card[3] +" У Вас были такие карты: "+ Player_card[0] + ", "+ Player_card[1] +" и "+ Player_card[2] + "! У Вас " + playerScore + " очков!")
    i1=5;}
    else if (i1==3){alert("Вам выпало: " + Player_card[4] +" У Вас были такие карты: "+ Player_card[0] + ", "+ Player_card[1] +", "+ Player_card[2] +" и "+ Player_card[3] + "! У Вас " + playerScore + " очков!")
    i1=5;}
  }


if (i1<5){
q = Math.floor((Math.random() * n));
n--;
Player[p]= Array[q];
Player_card[p]= Array_rus[q];
p++;
Array.splice(q,1);
Array_rus.splice(q,1);
playerScore = playerScore + Player[++i]
}
i1++;
}
}


q = Math.floor((Math.random() * n));
n--;
var Comp = [];
var Comp_card = [];
var c=0;      //число карт в массиве компьютера
var j=0;      // число карт у компьютера(в массиве компьютера)
Comp[c]= Array[q];
Comp_card[c]= Array_rus[q];
c++;
Array.splice(q,1);
Array_rus.splice(q,1);
q = Math.floor((Math.random() * n));
n--;
Comp[c]= Array[q];
Comp_card[c]= Array_rus[q];
c++;
Array.splice(q,1);
Array_rus.splice(q,1);
compScore = Comp[j] + Comp[++j];

if (compScore > 20){
  alert("У Компьютера 21!!!! Ему выпали такие карты:"+Comp_card[0]+" и "+ Comp_card[1]);
  compScore = 21
}
else if (compScore === 17 || compScore === 18 || compScore === 19 || compScore === 20){
  alert("У Компьютера " + compScore + " Очков. Ему выпали такие карты:" +Comp_card[0]+" и "+ Comp_card[1] )
}
else if(compScore < 17) { for (i1=0; i1<5;) { 
  if (compScore === 17 || compScore === 18 || compScore === 19 || compScore === 20){
    if (i1==1){alert("У Компьютера " + compScore + " Очков. Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+" и "+ Comp_card[2]);
    i1=5;}
    else if (i1==2){alert("У Компьютера " + compScore + " Очков. Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+", "+ Comp_card[2]+" и "+ Comp_card[3])
    i1=5;}
    else if (i1==3){alert("У Компьютера " + compScore + " Очков. Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+", "+ Comp_card[2]+", "+ Comp_card[3]+" и "+ Comp_card[4])
    i1=5;}
  }

  else if (compScore == 21){
    if (i1==1){alert("У Компьютера 21!!!! Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+" и "+ Comp_card[2]);
    i1=5;}
    else if (i1==2){alert("У Компьютера 21!!!! Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+", "+ Comp_card[2]+" и "+ Comp_card[3])
    i1=5;}
    else if (i1==3){alert("У Компьютера 21!!!! Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+", "+ Comp_card[2]+", "+ Comp_card[3]+" и "+ Comp_card[4])
    i1=5;}
  }
  else if (compScore > 21){
    if (i1==1){alert("У Компьютера " + compScore + " Очков. Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+" и "+ Comp_card[2]);
    i1=5;}
    else if (i1==2){alert("У Компьютера " + compScore + " Очков. Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+", "+ Comp_card[2]+" и "+ Comp_card[3])
    i1=5;}
    else if (i1==3){alert("У Компьютера " + compScore + " Очков. Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+", "+ Comp_card[2]+", "+ Comp_card[3]+" и "+ Comp_card[4])
    i1=5;}
  }


  if (i1<5){
  q = Math.floor((Math.random() * n));
  n--;
  Comp[c]= Array[q];
  Comp_card[c]= Array_rus[q];
  c++;
  Array.splice(q,1);
  Array_rus.splice(q,1);
  compScore = compScore + Comp[++j]
  
  console.log(Comp_card)
  console.log(i1)
  }
  i1++;
}
}

if (compScore > playerScore && compScore < 22){
  alert("Победил компьютер у него " + compScore + " Очков, а у Вас " + playerScore +" Очков");
  }
  else if (compScore < playerScore && playerScore < 22){
  alert("Победили Вы, у Вас " + playerScore + " Очков, а у Компьютера " + compScore +" Очков");
  }
  else if (playerScore > 21 && compScore < 22){
  alert("Победил компьютер у него " + compScore + " Очков, а у Вас " + playerScore +" Очков");
  }
  else if (playerScore < 22 && compScore > 21){
  alert("Победили Вы, у Вас " + playerScore + " Очков, а у Компьютера " + compScore +" Очков");
  }
  else if (playerScore > 21 && compScore > 21){
  alert("Ничья, у Вас " + playerScore + " Очков, а у Компьютера " + compScore +" Очков");
  }
  else if (playerScore === 21 && compScore === 21){
  alert("Ничья, у Вас " + playerScore + " Очков, и у Компьютера " + compScore +" Очков");
  }
  else if (playerScore === compScore && compScore < 22 && playerScore < 22){
  alert("Ничья, у Вас " + playerScore + " Очков, и у Компьютера " + compScore +" Очков");
  }
*/

/*if (compScore > playerScore && compScore < 22){
  text = "Победил компьютер у него " + compScore + " Очков, а у Вас " + playerScore +" Очков";
  }
  else if (compScore < playerScore && playerScore < 22){
  text ="Победили Вы, у Вас " + playerScore + " Очков, а у Компьютера " + compScore +" Очков";
  }
  else if (playerScore > 21 && compScore < 22){
  text = "Победил компьютер у него " + compScore + " Очков, а у Вас " + playerScore +" Очков";
  }
  else if (playerScore < 22 && compScore > 21){
  text = "Победили Вы, у Вас " + playerScore + " Очков, а у Компьютера " + compScore +" Очков";
  }
  else if (playerScore > 21 && compScore > 21){
  text = "Ничья, у Вас " + playerScore + " Очков, а у Компьютера " + compScore +" Очков";
  }
  else if (playerScore === 21 && compScore === 21){
  text = "Ничья, у Вас " + playerScore + " Очков, и у Компьютера " + compScore +" Очков";
  }
  else if (playerScore === compScore && compScore < 22 && playerScore < 22){
  text = "Ничья, у Вас " + playerScore + " Очков, и у Компьютера " + compScore +" Очков";
  }*/