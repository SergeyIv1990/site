var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");




/*document.getElementById('reload').display = "block";
(function buttonReload (){
    var def = document.getElementByClassName('buttonReload')
    
    style = def.style;
    style.display = ""
    //buttonReload.style.display = "";
});
*/

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();

// Звуковые файлы
var fly = new Audio();
var score_audio = new Audio();
var GameOver =new Audio();

GameOver.src = "../audio/games_flappy_bird/GameOver.mp3"
fly.src = "../audio/games_flappy_bird/fly.mp3"
score_audio.src = "../audio/games_flappy_bird/score.mp3"

var score = 0;
//bird position
var xPos = 10;
var yPos = 150;
var grav = 1;
var level=1;
//Сreating blocks
var pipe = [];
pipe[0] = {
    x: cvs.width,
    y: 0
}

bird.src = "../img/games_flappy_bird/bird.png";
bg.src = "../img/games_flappy_bird/bg.png";
fg.src = "../img/games_flappy_bird/fg.png";
pipeUp.src = "../img/games_flappy_bird/pipeUp.png";
pipeBottom.src = "../img/games_flappy_bird/pipeBottom.png";
a=draw;
//When pressing any button
document.addEventListener("keydown", moveUp);

var gap = 120;
/*if (level==3){ gap = 140;};
if (level==6){ gap = 130;};
if (level==8){ gap = 120;};
if (level==9){ gap = 110;};
if (level==10){ gap = 100;};*/

function moveUp() {
    fly.play();
    
    if (level==1){yPos -= 45};
    if (level==2){yPos -= 40};
    if (level==3){yPos -= 35};
    if (level==4){yPos -= 30};
    if (level==5){yPos -= 25};
    if (level==6){yPos -= 20};
    if (level==7){yPos -= 15};
}
function moveDown() {
    fly.play();
    if (level==1){yPos += 45};
    if (level==2){yPos += 40};
    if (level==3){yPos += 35};
    if (level==4){yPos += 30};
    if (level==5){yPos += 25};
    if (level==6){yPos += 20};
    if (level==7){yPos += 15};
}


function draw() {
    ctx.drawImage(bg, 0, 0);

    for (var i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);
        pipe[i].x--;

        var size;
if (level==1){size = 50};
if (level==2){size = 60};
if (level==3){size = 70};
if (level==4){size = 80};
if (level==5){size = 90};
if (level==6){size = 100};
if (level==7){size = 110};

        if (pipe[i].x == size) {
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height,
            });
        }
        // Отслеживание прикосновений
        if (xPos + bird.width >= pipe[i].x 
            && xPos <= pipe[i].x + pipeUp.width 
            && (yPos <= pipe[i].y + pipeUp.height 
            || yPos + bird.height >= pipe[i].y + pipeUp.height + gap)
            // При косании птички пола
            || yPos + bird.height >= cvs.height - fg.height) {
            a=stop;
            GameOver.play();
            alert("Ваш уровень " +level+ " Ваши очки " +score)
            // Перезагрузка страницы location.reload();buttonReload.style.display = "";
        }
        if (pipe[i].x == 5) {
            score++;
            score_audio.play();

        }
        
        if (score == 5){level=2}; 
        if (score == 10){level=3};
        if (score == 15){level=4};
        if (score == 20){level=5};
        if (score == 25){level=6};
        if (score == 30){level=7};

    }

    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, xPos, yPos);

    yPos += grav;

    ctx.fillStyle = "#000";
    ctx.font = "24px Verdana";
    ctx.fillText("Счет: " + score +"     Уровень " + level, 10, cvs.height - 20);

    requestAnimationFrame(a);
    console.log(gap);

}
pipeBottom.onload = draw;


//Изменение курсора при наведении на игровое поле
cvs.addEventListener("mousemove", function (evt) {
    if (evt.offsetX >= 0 && evt.offsetY >= 0 && evt.offsetX <= 287 && evt.offsetY <= 510) {
        cvs.style.cursor = "pointer";}
    else {cvs.style.cursor = "default";}});
//Активация курсора при клике на игровое поле
canvas.addEventListener("click", function (event) {
    let X = event.clientX - canvas.getBoundingClientRect().x;
    let Y = event.clientY - canvas.getBoundingClientRect().y;
    if (X >= 0 && Y >= 0 && X <= 287 && Y <= 510) { moveUp();}});

