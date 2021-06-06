function Item(shape, x, y) {
    this.shape = shape;
    this.x = x;
    this.y = y;
    this.shape.style.left = x + "px";
    this.shape.style.top = y + "px";
}


function Food(shape, x, y) {
    Item.call(this, shape, x, y);

    this.recreate = function () {
        this.x = getRandom20(window.innerHeight - 20);
        this.y = getRandom20(window.innerWidth - 20);
        this.shape.style.left = this.x + "px";
        this.shape.style.top = this.y + "px";
    };
}


function Player(shape, x, y) {
    Item.call(this, shape, x, y);

    this.moveUp = function () {
        this.y -= 20;
        this.shape.style.top = this.y + "px";
    };

    this.moveDown = function () {
        this.y += 20;
        this.shape.style.top = this.y + "px";
    };

    this.moveLeft = function () {
        this.x -= 20;
        this.shape.style.left = this.x + "px";
    };

    this.moveRight = function () {
        this.x += 20;
        this.shape.style.left = this.x + "px";
    };
};

function getRandom20(end) {
    let value = Math.round(Math.random() * end);
    return value - (value % 20);
}

let food = new Food(
    document.querySelector("#food"),
    getRandom20(window.innerWidth - 20),
    getRandom20(window.innerHeight - 20)
);

let player = new Player(
    document.querySelector("#player"),
    getRandom20(window.innerWidth - 20),
    getRandom20(window.innerHeight - 20)
);


window.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
        case 38:
            player.y > 0 && player.moveUp();
            break;
        case 40:
            (player.y > window.innerHeight - 20) && player.moveDown();
            break;
        case 37:
            player.x > 0 && player.moveLeft();
            break;
        case 39:
            (player.x > window.innerWidth - 30) && player.moveRight();
            break;
    };

    if (palayer.x === food.x && player.y === food.y) food.recreate();
});