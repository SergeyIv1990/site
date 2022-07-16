 // SELECT START ELEMENT
const StartPage = document.querySelector(".StartPage");

const playBtn = document.querySelector(".play");

// GAME OVER ELEMENT
const gameOverElement = document.querySelector(".gameover");

const player = new Object;
let OPPONENT;


 


playBtn.addEventListener("click", function(){

    StartPage.classList.add("hide");
});

function switchActive(off, on){
    off.classList.remove("active");
    on.classList.add("active");
};