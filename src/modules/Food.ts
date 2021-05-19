class Food {
    private element: HTMLElement;

    constructor() {
        // get food element from page
        this.element = document.getElementById("food")!;
    }

    // get x coordinates of food
    get x() {
        return this.element.offsetLeft;
    }

    // get y coordinates of food
    get y() {
        return this.element.offsetTop;
    }

    changePosition() {
        // random position in stage and must be the multiply of 10
        let left = Math.round(Math.random() * 29) * 10;
        let top = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + "px";
        this.element.style.top = top + "px";
    }
}

export default Food;