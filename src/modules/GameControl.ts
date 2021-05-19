import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl {
    private snake: Snake;
    private food: Food;
    private scorePanel: ScorePanel;

    // the direction of snake
    private direction: String = "";

    // whether game is live
    private isLive: boolean = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
    }

    // initialize game
    init() {
        document.addEventListener("keydown", this.keydownHandler.bind(this));
        this.snakeMove();
    }

    keydownHandler(event: KeyboardEvent) {
        //if (event.key ==)
        this.direction = event.key;
    }

    snakeMove() {
        let x = this.snake.x;
        let y = this.snake.y;

        switch (this.direction) {
            case "ArrowUp":
                y -= 10;
                break;
            case "ArrowDown":
                y += 10;
                break;
            case "ArrowLeft":
                x -= 10;
                break;
            case "ArrowRight":
                x += 10;
                break;
            default:
                break;
        }

        this.snake.x = x;
        this.snake.y = y;

        if (this.isLive) {
            setTimeout(this.snakeMove.bind(this), 300 - (this.scorePanel.getLevel() - 1) * 30);
        }
    }


}

export default GameControl;