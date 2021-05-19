class ScorePanel {
    private score: number;
    private level: number;

    // elements
    private scoreEle: HTMLElement;
    private levelEle: HTMLElement;

    private readonly maxLevel : number;

    // the scores need to get level up
    private readonly scoreForLevelUp : number;

    // maxLevel and scoreForLevelUp are set to 10 as default
    constructor(maxLevel: number = 10, scoreForLevelUp: number = 10) {
        this.score = 0;
        this.level = 1;
        this.scoreEle = document.getElementById("score")!;
        this.levelEle = document.getElementById("level")!;
        this.maxLevel = maxLevel;
        this.scoreForLevelUp = scoreForLevelUp;
    }

    getScore() {
        this.score++;
        this.scoreEle.innerHTML = this.score + "";

        // every this.scoreForLevelUp level will get up
        if (this.score % this.scoreForLevelUp === 0) {
            this.getLevelUP();
        }
    }

    getLevelUP() {
        if (this.level < this.maxLevel) {
            this.level++;
            this.levelEle.innerHTML = this.level + "";
        }

    }
}

export default ScorePanel;