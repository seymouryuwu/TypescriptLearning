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
    private isAlive: boolean = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
    }

    // initialize game
    init() {
        document.addEventListener("keydown", this.keydownHandler.bind(this));
        document.addEventListener("gameOver", this.gameOverHandler.bind(this));
        this.moveSnake();
    }

    keydownHandler(event: KeyboardEvent) {
        if (event.key === "ArrowUp" ||
            event.key === "ArrowDown" ||
            event.key === "ArrowLeft" ||
            event.key === "ArrowRight") {
            this.direction = event.key;
        }
    }

    gameOverHandler() {
        this.isAlive = false;
        alert("Game Over");
    }

    moveSnake() {
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

        // check if snake eats apple, if it does, increase body
        this.checkEat(x, y);

        // move snake
        this.snake.setCoordinates(x, true);
        this.snake.setCoordinates(y, false);

        // if snake is alive, move again
        if (this.isAlive) {
            // the higher level, the faster snake move
            setTimeout(this.moveSnake.bind(this), 150 - (this.scorePanel.getLevel() - 1) * 10);
        }
    }

    checkEat(x: number, y: number) {
        if ((x === this.food.x) && (y === this.food.y)) {
            this.food.changePosition();
            this.scorePanel.addScore();
            this.snake.increaseBody();
        }
    }
}

export default GameControl;