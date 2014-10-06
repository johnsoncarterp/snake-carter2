var snake;

var context;
var screenWidth;
var screenHeight;

gameInitalize();
gameDraw();

function gameInitalize() {
    var canvas = document.getElementbyId("game-screen");
    context = canvas.getContext("2d");
    screenWidth = window.innerWidth;
    screenHeight = window.innerheight;
    canvas.width = screenWidth;
    canvas.height = screenHeight;
    }

function gameLoop() {
    
}

function gameDraw() {
   context.fillStyle = "rgb(180, 235, 152)";
   context.fillRect(0, 0, screenWidth, screenHeight);
}