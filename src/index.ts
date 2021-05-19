import "./styles/index.less";
import Food from "./modules/Food";
import ScorePanel from "./modules/ScorePanel";

// test code
const food = new Food();
food.changePosition();
console.log(food.x, food.y);

const scorePanel = new ScorePanel();
for (let i = 0; i < 100; i++) {
    scorePanel.getScore();
}


