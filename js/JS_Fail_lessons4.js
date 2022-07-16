function init(player, OPPONENT){

  const canvas = document.getElementById("cvs");
  const ctx = canvas.getContext("2d");

  const xImage = new Image();
  xImage.src = "../img/TIC TAC TOE/X.png";
  const oImage = new Image();
  oImage.src = "../img/TIC TAC TOE/O.png";

  const COLUMN = 3;
  const ROW = 3;

  let board = [];
  const SPACE_SIZE = 150;

  let gameData = new Array(9);
  let currentPlayer = player.man;

  const COMBOS = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6]
  ];
  let GAME_OVER = false;
  function drawBoard(){
    let id = 0;
    for(let i = 0; i < ROW; i++){
      board[i] = [];
     for(let j = 0; j < COLUMN; j++){
       board[i][j] = id;
        ctx.strokeStyle = "#000";
        ctx.strokeRect(j * SPACE_SIZE, i * SPACE_SIZE, SPACE_SIZE, SPACE_SIZE);
        id++;    
      }
    }
  }

drawBoard();

canvas.addEventListener("click", function(event){
  if(GAME_OVER) return;
  let X = event.clientX - canvas.getBoundingClientRect().x;
  let Y = event.clientY - canvas.getBoundingClientRect().y;
  let i = Math.floor(Y/SPACE_SIZE);
  let j = Math.floor(X/SPACE_SIZE);
  let id = board[i][j];
  if( gameData[id] ) return;
  gameData[id] = currentPlayer;
  drawOnBoard(currentPlayer, i,j);
  if(isWinner(gameData, currentPlayer)){
    showGameOver(currentPlayer);
    GAME_OVER = true;
    return;
  }
  if(isTie(gameData)){
    showGameOver("tie");
    Game_over = true;
    return;
  }
  currentPlayer = currentPlayer == player.man ? player.friend : player.man;
  /*if( currentPlayer == player.man ){
    currentPlayer = player.friend;
  }
  else{
    currentPlayer = player.man
  }*/
})
function drawOnBoard(player, i, j){
  const img = player == "X" ? xImage : oImage;
  ctx.drawImage(img, j * SPACE_SIZE, i * SPACE_SIZE);
}
function isWinner(gameData, player){
  for(let i = 0; i < COMBOS.length; i++){
      let won = true;
      for(let j = 0; j < COMBOS[i].length; j++){
          let id = COMBOS[i][j];
          won = gameData[id] == player && won;
      }
      if(won){
          return true;
      }
  }
  return false;
}
function isTie(gameData){
  let isBoardFill = true;
  
  for(let i = 0; i < gameData.length; i++){
      isBoardFill = gameData[i] && isBoardFill;
  }

  if(isBoardFill){
      return true;
  }

  return false;
}

function showGameOver(player){
  let imgSrc = `img/${player}.png`;
  let message = player == "tie" ? "Oops No Winner" : "The winner is";
 

  gameOverElement.innerHTML = `
      <h1>${message}</h1>
      <img class="winner-img" src=${imgSrc} alt="">
      <div class="play" onclick="location.reload();">PLAY AGAIN!</div>
      `;
  
      gameOverElement.classList.remove("hide");
}
}
