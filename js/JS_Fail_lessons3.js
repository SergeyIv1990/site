const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");

const ground = new Image();
ground.src = "../img/games_snake/ground.png";

const foodImg = new Image();
foodImg.src = "../img/games_snake/food.png";

var deadSoung = new Audio();
var downSoung = new Audio();
var eatSoung = new Audio();
var leftSoung = new Audio();
var rightSoung = new Audio();
var upSoung = new Audio();


deadSoung.src = "../audio/games_snake/dead.mp3";
downSoung.src = "../audio/games_snake/down.mp3";
eatSoung.src = "../audio/games_snake/eat.mp3";
leftSoung.src = "../audio/games_snake/left.mp3";
rightSoung.src = "../audio/games_snake/right.mp3";
upSoung.src = "../audio/games_snake/up.mp3";


let box = 32;
let score = 0;

let food = {
    x: Math.floor((Math.random() * 17 + 1)) * box,
    y: Math.floor((Math.random() * 15 + 3)) * box,
};

let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box,
};

document.addEventListener("keydown", direction);

let dir;
function direction(event) {
    if (event.keyCode == 37 && dir != "right")
        dir = "left",
            leftSoung.play();
    else if (event.keyCode == 38 && dir != "down")
        dir = "up",
            upSoung.play();
    else if (event.keyCode == 39 && dir != "left")
        dir = "right",
            rightSoung.play();
    else if (event.keyCode == 40 && dir != "up")
        dir = "down",
            downSoung.play();
}
const btnUP = document.querySelector('button#buttonUp');
btnUP.onclick = function () {
    if (dir != "down"){
        dir = "up",
        upSoung.play();}
};
const btnRight = document.querySelector('button#buttonRight');
btnRight.onclick = function () {
    if (dir != "left"){
        dir = "right",
        rightSoung.play();}

};
const btnLeft = document.querySelector('button#buttonLeft');
btnLeft.onclick = function () {
    if (dir != "right"){
    dir = "left";
    leftSoung.play();}
};

const btnDown = document.querySelector('button#buttonDown');
btnDown.onclick = function () {
    if (dir != "up"){
        dir = "down",
        downSoung.play();}

};




function eatTail(head, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (head.x == arr[i].x && head.y == arr[i].y)

            clearInterval(game),
                deadSoung.play() && alert("Вы проиграли!!! Заработанные очки " +score);
    }
}

function drawGame() {
    ctx.drawImage(ground, 0, 0);

    ctx.drawImage(foodImg, food.x, food.y);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i == 0 ? "green" : "red";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    };

    ctx.fillStyle = "white";
    ctx.font = "50px Arial";
    ctx.fillText(score, box * 2.5, box * 1.7);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (snakeX == food.x && snakeY == food.y) {
        score++;
        eatSoung.play();
        food = {
            x: Math.floor((Math.random() * 17 + 1)) * box,
            y: Math.floor((Math.random() * 15 + 3)) * box,
        };
    } else {
        snake.pop();
    }

    if (snakeX < box || snakeX > box * 17
        || snakeY < 3 * box || snakeY > box * 17)

        clearInterval(game),
            deadSoung.play() && alert("Вы проиграли!!! Заработанные очки " +score);
            

    // Перезагрузка страницы location.reload();

    if (dir == "left") snakeX -= box;
    if (dir == "right") snakeX += box;
    if (dir == "up") snakeY -= box;
    if (dir == "down") snakeY += box;

    let newHead = {
        x: snakeX,
        y: snakeY
    };

    eatTail(newHead, snake)
    snake.unshift(newHead);

}

let game = setInterval(drawGame, 200);