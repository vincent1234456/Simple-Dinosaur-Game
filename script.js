const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
    if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
        dino.classList.remove("jump");
    }, 300);
 }
}

let isAlive = setInterval(function () {
// get current dino Y position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));


    // get current cactus X postion
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left")
);


//direct collision
if (cactusLeft <50 && cactusLeft >0 && dinoTop >= 140){
    //collision
alert ("WALA NA FINISH NA!");
}
}, 10);

document.addEventListener("keydown", function (event) {
    jump();
});