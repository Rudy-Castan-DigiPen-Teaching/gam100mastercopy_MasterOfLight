let currentScene = MAIN_MENU;
let MainMenuScene = new MainMenu();
let PlayScene = new Play();
let GameOverScene = new GameOver();

let score = 0;
let playerLocate;
let world

const COIN = 1;
const FLOOR = 2;
const ENEMY = 3;

let enemy;
let enemyCount = 0;
const ENEMY_LIVE = 1;
const ENEMY_DEATH = 2;

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);
  
//적 잡아먹는 점수
  switch(enemy) {
    case ENEMY_LIVE :
      //캐릭터는 죽음 + 모션
      //캐릭터 라이프 -1
      /*if(charcterLife == -1) {
      currentScene = GAME_OVER
      } */
      break;
      case ENEMY_DEATH :
      if(playerLocate == ENEMY) {
        /*if 시간이 10초 이상지나면 enemy = ENEMY_LIVE, enemyCount = 0;*/
        world = FLOOR;
        score = score + 200 * (2^enemyCount); //400 800 1600 1600 1600 3200
        if(enemyCount != 3) {
        enemyCount +=1;
        } else if(enemyCount == 3) {
          //1600점이 세번 반복되게 코딩
          //3번반복 끝나면 enemyCount +=1;
        }
      }
      break;
  }
  
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
    case MAIN_MENU:
      MainMenuScene.update()
      MainMenuScene.draw()
      break;
    case PLAY:
      PlayScene.update()
      PlayScene.draw()
      text("score : ", width/2 -100, 50)
      text(score,width/2,50);
      break;
    case GAME_OVER:
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
    currentScene = MAIN_MENU
  } else if (keyCode == 97 || keyCode == 49) {
    currentScene = PLAY
  } else if (keyCode == 98 || keyCode == 50) {
    currentScene = GAME_OVER
  }
  /*else if (keyCode == 99 || keyCode == 51) {
     CurrentScene = BONUSSTAGE 
   } */
}