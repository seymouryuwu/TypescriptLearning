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

    // move snake
    setCoordinates(value: number, isHorizontal: boolean) {
        let coordinate = isHorizontal ? this.x : this.y;
        if (coordinate === value) {
            return;
        }

        // if snake tries to turn around, let it move move forward.
        if (this.bodies[1]) {
            // the coordinate of the second node of the snake
            let second: number;
            if (isHorizontal) {
                second = (this.bodies[1] as HTMLElement).offsetLeft;
            } else {
                second = (this.bodies[1] as HTMLElement).offsetTop;
            }
            // if second === value, that means snake turn around.
            if (second === value) {
                if (value > coordinate) {
                    value = coordinate - 10;
                } else {
                    value = coordinate + 10;
                }
            }
        }

        // if input value beyond the boundary, game over
        if (value < 0 || value > 290) {
            const event = new CustomEvent("gameOver");
            document.dispatchEvent(event);
        } else {
            this.moveBody();
            if (isHorizontal) {
                this.head.style.left = value + "px";
            } else {
                this.head.style.top = value + "px";
            }

            this.checkCollision();
        }
    }

    // snake increases one unit of body
    increaseBody() {
        this.snake.insertAdjacentHTML("beforeend", "<div></div>")
    }

    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left = x + "px";
            (this.bodies[i] as HTMLElement).style.top = y + "px";
        }
    }

    checkCollision() {
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement;
            if (this.x === bd.offsetLeft && this.y === bd.offsetTop) {
                const event = new CustomEvent("gameOver");
                document.dispatchEvent(event);
            }
        }
    }
}

export default Snake;