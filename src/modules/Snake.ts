class Snake {
    private snake: HTMLElement;
    private head: HTMLElement;
    // snake bodies including head
    private bodies: HTMLCollection;

    constructor() {
        this.snake = document.getElementById("snake")!;
        this.head = document.querySelector("#snake > div")!;
        this.bodies = this.snake.getElementsByTagName("div");
    }

    // get snake head coordinates
    get x() {
        return this.head.offsetLeft;
    }

    get y() {
        return this.head.offsetTop;
    }

    // set snake head coordinates
    set x(value) {
        if (this.x === value) {
            return;
        }

        if (value < 0 || value > 290) {
            const event = new CustomEvent("gameOver");
            document.dispatchEvent(event);
        } else {
            this.head.style.left = value + "px";
        }
    }

    set y(value) {
        if (this.y === value) {
            return;
        }

        if (value < 0 || value > 290) {
            const event = new CustomEvent("gameOver");
            document.dispatchEvent(event);
        } else {
            this.head.style.top = value + "px";
        }
    }

    // snake increases one unit of body
    increaseBody() {
        this.snake.insertAdjacentHTML("beforeend", "<div></div>")
    }
}

export default Snake;