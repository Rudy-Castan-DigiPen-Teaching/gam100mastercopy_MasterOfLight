let currentScene = MAINMENU;
let MainMenuScene = new MainMenu();
let PlayScene = new Play();
let GameOverScene = new GameOver();

let score = 0;
let playerLocate;
let world

const COIN = 1;
const FLOOR = 2;

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);
  
//Coin먹으면 점수 올라가기 + 코인 표현
  if (playerLocate == COIN) {
    world = FLOOR;
    score = score + 10;
  }
  switch (world) {
    case COIN:
      push();
      fill('yellow');
      circle(10, 10, 10);
      pop();
      break;
    case FLOOR:
      break;
  }

//stage manage
  switch (currentScene) {
    case MAINMENU:
      MainMenuScene.update()
      MainMenuScene.draw()
      break;
    case PLAY:
      PlayScene.update()
      PlayScene.draw()
      text("score : ", width/2 -100, 50)
      text(score,width/2,50);
      break;
    case GAMEOVER:
      GameOverScene.update()
      GameOverScene.draw()
      break;
      /*case BONUSSTAGE:
        
        break; */
  }
}

//나중에 지우기 테스트용
function keyPressed() {
  if (keyCode == 96 || keyCode == 48) {
    currentScene = MAINMENU
  } else if (keyCode == 97 || keyCode == 49) {
    currentScene = PLAY
  } else if (keyCode == 98 || keyCode == 50) {
    currentScene = GAMEOVER
  }
  /*else if (keyCode == 99 || keyCode == 51) {
     CurrentScene = BONUSSTAGE 
   } */
}