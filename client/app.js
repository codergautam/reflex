state = 0
round = 1

function showhide(show, hide) {
    document.getElementById(show).style.display = ""
    document.getElementById(hide).style.display = "none"
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

document.getElementById("start").onclick = () => {
    showhide("enterbday", "welcome")
}
document.getElementById("datedone").onclick = () => {
    age = document.getElementById("age").value
    if (!age || age < 5 || age > 100) return
    showhide("how2play", "enterbday")
}
document.getElementById("game").onclick = () => {
    if (!age || age < 5 || age > 100) return
    game()
}

function game() {
    document.body.style.backgroundColor = "red"
    showhide("game-1", "how2play")
    bruh = setTimeout(() => {

    }, getRandomInt(3000, 7000))
}